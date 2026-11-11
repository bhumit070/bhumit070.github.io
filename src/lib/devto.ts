import type { BlogResponse } from '../components/blog';

// per_page defaults to 30; ask for everything so the stats stay accurate.
export const BLOG_API_URL =
  'https://dev.to/api/articles?username=bhumit070&per_page=1000';

export async function fetchBlogs(): Promise<Array<BlogResponse>> {
  const response = await fetch(BLOG_API_URL);
  if (!response.ok) {
    throw new Error(`Something went wrong: ${response.status}`);
  }
  return response.json();
}

let buildTimeBlogs: Promise<Array<BlogResponse>> | undefined;

// Used during the build. Fetched once and shared by the page and llms.txt.
// Never throws: on failure the page falls back to fetching in the browser.
export function getBuildTimeBlogs(): Promise<Array<BlogResponse>> {
  buildTimeBlogs ??= fetchBlogs().catch((error) => {
    console.warn(`[devto] build-time fetch failed: ${String(error)}`);
    return [];
  });
  return buildTimeBlogs;
}
