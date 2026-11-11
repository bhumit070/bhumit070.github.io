import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const BLOG_API_URL =
  'https://dev.to/api/articles?username=bhumit070&per_page=1000';

type DevToArticle = {
  title: string;
  description: string;
  url: string;
  published_at: string;
};

// Appends the current dev.to article list to dist/llms.txt at build time,
// so the file stays in sync with published blogs on every deploy.
function llmsTxtBlogs(): Plugin {
  let outDir = 'dist';
  return {
    name: 'llms-txt-blogs',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const file = resolve(outDir, 'llms.txt');
      try {
        const response = await fetch(BLOG_API_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const articles = (await response.json()) as Array<DevToArticle>;
        if (!articles.length) return;

        const lines = articles
          .sort((a, b) => b.published_at.localeCompare(a.published_at))
          .map((a) => {
            const date = a.published_at.slice(0, 10);
            const description = a.description.replace(/\s+/g, ' ').trim();
            return `- [${a.title}](${a.url}): ${date}. ${description}`;
          });
        const section = `## Blog Posts\n\n${lines.join('\n')}\n\n`;

        const content = await readFile(file, 'utf8');
        const anchor = '## Links';
        const updated = content.includes(anchor)
          ? content.replace(anchor, `${section}${anchor}`)
          : `${content.trimEnd()}\n\n${section}`;
        await writeFile(file, updated);
      } catch (error) {
        console.warn(`[llms-txt-blogs] skipped blog list: ${String(error)}`);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), llmsTxtBlogs()],
  assetsInclude: ['./src/assets/**/*'],
  base: '/',
});
