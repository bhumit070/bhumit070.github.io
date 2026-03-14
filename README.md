# Portfolio

Personal portfolio website built to showcase projects, skills, and experience. Live at [bhumit070.github.io](https://bhumit070.github.io/).

## 🚀 Tech Stack

- **Framework**: [React](https://reactjs.org/) (v18)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling/Components**: `react-multi-carousel`, CSS
- **Deployment**: [GitHub Pages](https://pages.github.com/) & `gh-pages` package

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
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

To start the local development server with Hot Module Replacement (HMR):

```bash
yarn dev
```

The application will be available at `http://localhost:5173`.

## 🏗️ Build & Deploy

This project uses `gh-pages` for deployment.

- **To build the project for production**:
  ```bash
  yarn build
  ```
- **To preview the production build locally**:
  ```bash
  yarn preview
  ```
- **To deploy to GitHub Pages**:
  ```bash
  yarn deploy
  ```
  _Note: This command automatically builds the project (`yarn predeploy`) and pushes the `dist` directory to the `gh-pages` branch._

## 🧹 Code Quality

- **Linting**: Run `yarn lint` to check for ESLint warnings and errors.
- **Formatting**: Run `yarn format` to format code using Prettier.

## 📄 License

This project is created for personal portfolio purposes. Feel free to explore the code!
