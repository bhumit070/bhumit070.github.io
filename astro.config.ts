import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import type { AstroIntegration } from 'astro';
import react from '@astrojs/react';
import { getBuildTimeBlogs } from './src/lib/devto';

const SITE = 'https://bhumit070.bid';

// After each build: add the current dev.to posts to llms.txt and write sitemap.xml.
function crawlerFiles(): AstroIntegration {
  return {
    name: 'crawler-files',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const today = new Date().toISOString().slice(0, 10);

        const urls = ['/', '/llms.txt'].map(
          (path) =>
            `  <url>\n    <loc>${new URL(path, SITE).href}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
        );
        await writeFile(
          `${outDir}/sitemap.xml`,
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
        );

        const articles = await getBuildTimeBlogs();
        if (!articles.length) {
          logger.warn('no blogs fetched; llms.txt left without a blog list');
          return;
        }
        const lines = [...articles]
          .sort((a, b) => b.published_at.localeCompare(a.published_at))
          .map((a) => {
            const date = a.published_at.slice(0, 10);
            const description = a.description.replace(/\s+/g, ' ').trim();
            return `- [${a.title}](${a.url}): ${date}. ${description}`;
          });
        const section = `## Blog Posts\n\n${lines.join('\n')}\n\n`;

        const file = `${outDir}/llms.txt`;
        const content = await readFile(file, 'utf8');
        const anchor = '## Links';
        await writeFile(
          file,
          content.includes(anchor)
            ? content.replace(anchor, `${section}${anchor}`)
            : `${content.trimEnd()}\n\n${section}`
        );
      },
    },
  };
}

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE,
  integrations: [react(), crawlerFiles()],
});
