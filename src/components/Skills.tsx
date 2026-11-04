export function Skills() {
  const currentDate = new Date();
  const startingDate = new Date(2020, 11, 17); // 17 december 2020 starting of my working date.
  let yearsOfExperience =
    currentDate.getFullYear() - startingDate.getFullYear() - 1;
  const currentMonth = currentDate.getMonth();
  if (currentMonth === 11) {
    yearsOfExperience += 1;
  } else {
    yearsOfExperience = +`${yearsOfExperience}.${currentMonth + 1}`;
  }

  const skills: Array<string> = [
    `✔️ ${yearsOfExperience} Years of production MERN engineering with full ownership, end to end.`,
    `✔️ +20% product usage from an AI/RAG chatbot built on OpenSearch vector search.`,
    `✔️ Led an Azure → AWS platform migration and a legacy PHP → Node.js migration.`,
    `✔️ -50% CI build time, -30% memory footprint, -25% latency on real-time Socket.IO/Redis infrastructure.`,
    `✔️ Hands-on with distributed systems (Redis, RabbitMQ, OpenSearch) and automated testing (Vitest, PHPUnit).`,
  ];

  return (
    <section className="section--page">
      <h2>Skills & Qualifications</h2>
      <ul id="qualifications--list">
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
