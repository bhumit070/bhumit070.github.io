import { BlogResponse } from '.';

export function BlogCard(props: BlogResponse) {
    const {
        title,
        tag_list,
        readable_publish_date,
        canonical_url,
        social_image,
    } = props;

    return (
        <div
            className='card--project'
            style={{ cursor: 'pointer' }}
            onClick={() => {
                window.location.href = canonical_url;
            }}
        >
            <img
                style={{
                    width: '100%',
                    borderRadius: '10px',
                }}
                src={social_image}
                alt={title}
                loading='lazy'
            />
            <h3>{title}</h3>
            <small style={{ display: 'block' }}>
                Published on {readable_publish_date}
            </small>
            <small style={{ display: 'block' }}>
                {props.positive_reactions_count > 0
                    ? `Liked by ${props.positive_reactions_count} Amazing People!`
                    : 'Yet to be seen by amazing people!'}
            </small>
            {tag_list.length ? (
                <div>
                    {tag_list.map((tag) => {
                        return <span className='pill'>{tag}</span>;
                    })}
                </div>
            ) : null}
        </div>
    );
}
