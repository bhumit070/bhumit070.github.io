import { getYearsOfExperience } from '../lib/experience';

export function Skills() {
  const yearsOfExperience = getYearsOfExperience();

  const skills: Array<string> = [
    `✔️ +20% product usage from an AI/RAG chatbot built on OpenSearch vector search.`,
    `✔️ Led an Azure → AWS platform migration and a legacy PHP → Node.js migration.`,
    `✔️ -50% CI build time, -30% memory footprint, -25% latency on real-time Socket.IO/Redis infrastructure.`,
    `✔️ Hands-on with distributed systems (Redis, RabbitMQ, OpenSearch) and automated testing (Vitest, PHPUnit).`,
  ];

  return (
    <section className="section--page">
      <h2>Skills & Qualifications</h2>
      <ul id="qualifications--list">
        {/* Rendered at build time; refreshed in the browser by an inline script. */}
        <li>
          ✔️ <span data-years-of-experience>{yearsOfExperience}</span> Years of
          production MERN engineering with full ownership, end to end.
        </li>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
