import { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';

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
                setError(
                    e.message || 'Something went wrong, while fetching blogs',
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <section className='section--page' id='blog--container'>
            <h2>My Blogs</h2>
            {loading ? (
                <div className='loader'></div>
            ) : error ? (
                error
            ) : blogs.length ? (
                blogs.map((blog) => <BlogCard key={blog.id} {...blog} />)
            ) : (
                'No Blogs Found.'
            )}
        </section>
    );
}
