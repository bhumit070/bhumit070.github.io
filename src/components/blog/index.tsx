import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { BlogCard } from './BlogCard';
import { BlogStats } from './BlogStats';
import { fetchBlogs } from '../../lib/devto';

export type BlogResponse = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: string;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image?: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at?: string;
  crossposted_at: string;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: Array<string>;
  tags: string;
  user: User;
};

export type User = {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
};

const AUTOPLAY_INTERVAL_MS = 4000;

// useLayoutEffect warns when rendered at build time; there's no layout there anyway.
const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

// Fisher–Yates, so every reload leads with a different blog.
function shuffle<T>(items: Array<T>): Array<T> {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

type BlogsProps = {
  // Fetched at build time so the static HTML already contains the blogs.
  initialBlogs?: Array<BlogResponse>;
};

export function Blogs({ initialBlogs = [] }: BlogsProps) {
  const [blogs, setBlogs] = useState<Array<BlogResponse>>(initialBlogs);
  const [loading, setLoading] = useState(initialBlogs.length === 0);
  const [error, setError] = useState<string | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Read after mount: `window` doesn't exist while rendering at build time.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  // Refresh from dev.to so posts published after the last build still show.
  useEffect(() => {
    fetchBlogs()
      .catch((e) => {
        // Fall back to the build-time blogs if the refresh fails.
        if (!initialBlogs.length) throw e;
        return initialBlogs;
      })
      .then((blogs) => {
        // Shuffle once, so every reload leads with a different blog.
        setBlogs(shuffle(blogs));
      })
      .catch((e) => {
        setError(e.message || 'Something went wrong, while fetching blogs');
      })
      .finally(() => {
        setLoading(false);
      });
    // Runs once on mount; initialBlogs never changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track || !blogs.length) return;
      const next = (index + blogs.length) % blogs.length;
      track.scrollTo({
        left: next * track.clientWidth,
        behavior: reducedMotion ? 'auto' : 'smooth',
      });
    },
    [blogs.length, reducedMotion]
  );

  // Scroll snapping follows the visible slide when the list is reshuffled,
  // so jump back to the first slide whenever the blogs are replaced.
  useIsomorphicLayoutEffect(() => {
    if (trackRef.current) trackRef.current.scrollLeft = 0;
    setActiveIndex(0);
  }, [blogs]);

  // Keep the active dot in sync with however the user scrolls the track.
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  // Restarts on every slide change, so manual navigation resets the countdown.
  useEffect(() => {
    if (paused || reducedMotion || blogs.length < 2) return;
    const timer = setTimeout(() => goTo(activeIndex + 1), AUTOPLAY_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, paused, reducedMotion, blogs.length, goTo]);

  useEffect(() => {
    const onVisibilityChange = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(activeIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(activeIndex - 1);
    }
  };

  return (
    <section className="section--page" id="blog--container">
      <div className="blog--header">
        <h2>My Blogs</h2>
        {blogs.length > 1 ? (
          <div className="blog--controls">
            <span className="blog--counter">
              {activeIndex + 1} / {blogs.length}
            </span>
            <button
              type="button"
              className="blog--arrow"
              aria-label="Previous blog"
              onClick={() => goTo(activeIndex - 1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="blog--arrow"
              aria-label="Next blog"
              onClick={() => goTo(activeIndex + 1)}
            >
              ›
            </button>
          </div>
        ) : null}
      </div>
      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        error
      ) : blogs.length ? (
        <div
          className="blog--carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="My blogs"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="blog--track"
            tabIndex={0}
            onScroll={onScroll}
            onKeyDown={onKeyDown}
          >
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="blog--slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${blogs.length}`}
                aria-hidden={index !== activeIndex}
              >
                <BlogCard {...blog} />
              </div>
            ))}
          </div>

          {blogs.length > 1 ? (
            <>
              <div className="blog--progress">
                <div
                  key={activeIndex}
                  className="blog--progress__bar"
                  style={{
                    animationDuration: `${AUTOPLAY_INTERVAL_MS}ms`,
                    animationPlayState: paused ? 'paused' : 'running',
                    display: reducedMotion ? 'none' : undefined,
                  }}
                ></div>
              </div>
              <div className="blog--dots">
                {blogs.map((blog, index) => (
                  <button
                    key={blog.id}
                    type="button"
                    className={`blog--dot${index === activeIndex ? ' blog--dot__active' : ''}`}
                    aria-label={`Go to blog ${index + 1}`}
                    aria-current={index === activeIndex}
                    onClick={() => goTo(index)}
                  ></button>
                ))}
              </div>
            </>
          ) : null}

          <BlogStats blogs={blogs} />
        </div>
      ) : (
        'No Blogs Found.'
      )}
    </section>
  );
}
