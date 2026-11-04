import { BlogResponse } from '.';

type Stat = {
  value: number;
  label: string;
};

const formatNumber = new Intl.NumberFormat('en', { notation: 'compact' })
  .format;

export function BlogStats({ blogs }: { blogs: Array<BlogResponse> }) {
  const sum = (pick: (blog: BlogResponse) => number) =>
    blogs.reduce((total, blog) => total + (pick(blog) || 0), 0);

  const stats: Array<Stat> = [
    {
      value: blogs.length,
      label: blogs.length === 1 ? 'blog written' : 'blogs written',
    },
    {
      value: sum((blog) => blog.public_reactions_count),
      label: 'reactions collected',
    },
    { value: sum((blog) => blog.comments_count), label: 'comments received' },
    {
      value: sum((blog) => blog.reading_time_minutes),
      label: 'minutes of reading',
    },
  ];

  const tags = new Set(blogs.flatMap((blog) => blog.tag_list));
  const firstPublished = blogs.reduce<string | null>(
    (oldest, blog) =>
      !oldest || blog.published_at < oldest ? blog.published_at : oldest,
    null
  );

  return (
    <div className="blog--stats">
      <dl className="blog--stats__grid">
        {stats.map((stat) => (
          <div key={stat.label} className="blog--stats__item">
            <dt className="blog--stats__label">{stat.label}</dt>
            <dd className="blog--stats__value">{formatNumber(stat.value)}</dd>
          </div>
        ))}
      </dl>
      <p className="blog--stats__footnote">
        Across {tags.size} topics
        {firstPublished
          ? ` since ${new Date(firstPublished).getFullYear()}`
          : ''}{' '}
        · live from{' '}
        <a href="https://dev.to/bhumit070" target="_blank" rel="noreferrer">
          dev.to
        </a>
      </p>
    </div>
  );
}
