# Portfolio

Personal portfolio website built to showcase projects, skills, and experience. Live at [bhumit070.bid](https://bhumit070.bid/).

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) static site generation, with [React](https://reactjs.org/) (v18) components
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22.23.4 or higher, required by Astro)
- [Yarn](https://yarnpkg.com/) (Package Manager)

## 🛠️ Installation & Setup

1. **Clone the repository** (if not already done):

   ```bash
   git clone https://github.com/bhumit070/bhumit070.github.io.git
   cd bhumit070.github.io
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

## 💻 Development

To start the local development server:

```bash
yarn dev
```

The application will be available at `http://localhost:4321`.

## 🧱 How the site is built

The whole page is rendered to static HTML at build time (`src/pages/index.astro`), so search engines and LLM crawlers can read it without running JavaScript. Only two parts run in the browser:

- **Blog carousel** (`src/components/blog`): a React island (`client:visible`) that loads when it scrolls into view. The build fetches posts from dev.to and renders them into the HTML; the island then refreshes them so posts published after the last deploy still appear.
- **Years of experience**: a small inline script that keeps the number current between deploys.

The build also generates the crawler files (see `astro.config.ts`):

- `llms.txt`: `public/llms.txt` with the current dev.to post list added
- `sitemap.xml`: generated with today's date as `lastmod`
- `robots.txt`: served from `public/` as-is

## 🏗️ Build & Deploy

- **To build the project for production**:
  ```bash
  yarn build
  ```
- **To preview the production build locally**:
  ```bash
  yarn preview
  ```
- **Deployment**: Every push to `main` triggers the [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow, which builds the site and publishes `dist` to GitHub Pages. It can also be run manually from the Actions tab.

## 🧹 Code Quality

- **Linting**: Run `yarn lint` to check for ESLint warnings and errors.
- **Formatting**: Run `yarn format` to format code using Prettier.

## 📄 License

This project is created for personal portfolio purposes. Feel free to explore the code!
