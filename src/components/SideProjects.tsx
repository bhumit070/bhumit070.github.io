type Project = {
  url: string;
  name: string;
  name_prefix?: string;
};

export function SideProjects() {
  const projects: Array<Project> = [
    {
      name: 'Npm Package',
      url: 'https://www.npmjs.com/package/jseassy',
    },
    {
      name: 'VsCode Extension',
      url: 'https://github.com/bhumit070/google-docs-clone',
    },
    {
      name: 'Package Flex - Chrome Extension',
      url: 'https://chromewebstore.google.com/detail/packageflex/kikhkjfhchalgdhdjfjjimlgbipmhlci',
    },
    {
      name: 'Deps cleaner',
      url: 'https://github.com/bhumit070/deps-cleaner',
    },
    {
      name: 'Destiny',
      url: 'https://github.com/bhumit070/destiny',
    },
  ];

  return projects.length ? (
    <section className="section--page">
      <h2>Side Projects</h2>

      {projects.map((project) => {
        return (
          <div id={project.name} className="card--project">
            <a href={project.url} target="_blank">
              <span>{project.name_prefix || '🏆'} </span> {project.name}
            </a>
          </div>
        );
      })}
    </section>
  ) : null;
}
