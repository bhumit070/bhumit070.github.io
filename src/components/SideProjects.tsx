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
            name: 'Cli Resume',
            url: 'https://github.com/bhumit070/cli-resume',
        },
        {
            name: 'Google Docs Clone',
            url: 'https://github.com/bhumit070/google-docs-clone',
        },
        {
            name: 'VsCode Extension',
            url: 'https://github.com/bhumit070/google-docs-clone',
        },
    ];

    return (
        <section className='section--page'>
            <h2>Side Projects</h2>

            {projects.map((project) => {
                return (
                    <div id={project.name} className='card--project'>
                        <a href={project.url} target='_blank'>
                            <span>{project.name_prefix || '🏆'} </span>{' '}
                            {project.name}
                        </a>
                    </div>
                );
            })}
        </section>
    );
}
