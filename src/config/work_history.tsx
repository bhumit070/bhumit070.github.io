export type TWorkHistory = {
  title_and_company: string;
  company_link?: string;
  from_and_to: string;
  description: string;
  experience: Array<string>;
};

export const workHistory: Array<TWorkHistory> = [
  {
    title_and_company: '🚧 Software Engineer | Cornerstone OnDemand',
    company_link: 'https://www.cornerstoneondemand.com/',
    from_and_to: '11/2023 - Present · Pune (Hybrid)',
    description: `Building <a href='https://myguide.org'><b>MyGuide.org</b></a>`,
    experience: [
      `Designed and shipped an <b>AI chatbot</b> using a <b>RAG pipeline</b> with <b>OpenSearch vector search</b>, driving a <b>20% increase</b> in product usage`,
      `Led the migration of the entire platform from <b>Azure to AWS</b> to capture larger committed-use discounts; caught that a <b>CloudFront/S3</b> wildcard folder-access policy could replace a proposed Lambda-based signature verification step, avoiding unnecessary compute cost`,
      `Led the migration of a legacy <b>PHP</b> codebase to <b>Node.js</b> across core services, backed by automated tests in <b>PHPUnit</b> and <b>Vitest</b>, with zero disruption to existing users`,
      `Re-architected <b>Docker</b> builds into a multistage pipeline wired into <b>GitHub Actions</b>, cutting CI build time by <b>50%</b>`,
      `Diagnosed and fixed long-standing <b>Redis</b> and cURL issues in legacy services, reducing memory usage by <b>30%</b>`,
    ],
  },
  {
    title_and_company: '🚧 MERN Developer | Yudiz Solution',
    company_link: 'https://www.yudiz.com/',
    from_and_to: '02/2022 - 11/2023 · Ahmedabad (Onsite)',
    description: `Owned the company's video-calling platform and built real-time game backends.`,
    experience: [
      `Took full ownership of the company's <b>video-calling platform</b> — architecture, roadmap, and maintenance — and led a refactor of its core modules that cut latency by <b>25%</b>`,
      `Built scalable game APIs and real-time systems using <b>Socket.IO</b> and <b>Redis Pub/Sub</b>, improving performance and reliability by <b>30%</b>`,
      `Mentored <b>3 junior developers</b> on the MERN stack and contributed to internal onboarding and training programs`,
    ],
  },
  {
    title_and_company: '🚧 JavaScript Developer | Freelance',
    from_and_to: '12/2020 - 02/2022 · Remote',
    description: `Built APIs and web apps for multiple clients.`,
    experience: [
      `Built robust <b>Node.js APIs</b> powering multiple client web applications, enabling smooth frontend–backend communication`,
      `Developed performant <b>React</b> and <b>Vue</b> applications, introducing <b>TypeScript</b>, <b>GraphQL</b>, and <b>PWAs</b> for modern, high-performance client sites`,
      `Re-architected a frontend-heavy client app from fetching entire datasets on every request to targeted, field-scoped API calls, cutting initial load time from <b>~5 minutes to 10–12 seconds</b> (a ~95% reduction)`,
    ],
  },
];
