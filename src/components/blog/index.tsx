import { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export function Blogs() {
  const BLOG_API_URL = 'https://dev.to/api/articles?username=bhumit070';

  const [blogs, setBlogs] = useState<Array<BlogResponse>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(BLOG_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((blogs: Array<BlogResponse>) => {
        setBlogs(blogs);
      })
      .catch((e) => {
        setError(e.message || 'Something went wrong, while fetching blogs');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="section--page" id="blog--container">
      <h2>My Blogs</h2>
      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        error
      ) : blogs.length ? (
        <>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </Carousel>
        </>
      ) : (
        'No Blogs Found.'
      )}
    </section>
  );
}
