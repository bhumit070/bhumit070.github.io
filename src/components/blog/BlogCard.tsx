import type { BlogResponse } from '.';

export function BlogCard(props: BlogResponse) {
  const {
    title,
    description,
    tag_list,
    readable_publish_date,
    reading_time_minutes,
    positive_reactions_count,
    canonical_url,
    social_image,
  } = props;

  return (
    <a
      className="blog--card"
      href={canonical_url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="blog--card__image"
        src={social_image}
        alt=""
        loading="lazy"
      />
      <div className="blog--card__body">
        <small className="blog--card__meta">
          {readable_publish_date} · {reading_time_minutes} min read
          {positive_reactions_count > 0
            ? ` · ❤️ ${positive_reactions_count}`
            : ''}
        </small>
        <h3 className="blog--card__title">{title}</h3>
        {description ? (
          <p className="blog--card__description">{description}</p>
        ) : null}
        {tag_list.length ? (
          <div>
            {tag_list.map((tag) => {
              return (
                <span key={tag} className="pill">
                  #{tag}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </a>
  );
}
