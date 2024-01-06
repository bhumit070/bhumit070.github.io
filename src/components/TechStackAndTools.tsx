type TechStack = {
    title: string;
    items: Array<{
        className: string;
        title: string;
    }>;
};

export function TechStackAndTools() {
    const techStack: Array<TechStack> = [
        {
            title: 'Programming Languages',
            items: [
                {
                    className: 'devicon-typescript-plain colored devicon',
                    title: 'Typescript',
                },
                {
                    className: 'devicon-javascript-plain colored devicon',
                    title: 'Javascript',
                },
                {
                    className: 'devicon-nodejs-plain colored devicon',
                    title: 'NodeJs',
                },
            ],
        },
        {
            title: 'Frameworks',
            items: [
                {
                    className: 'devicon-express-original colored devicon',
                    title: 'Express Js',
                },
                {
                    className: 'devicon-nestjs-plain colored devicon',
                    title: 'Nest Js',
                },
            ],
        },
        {
            title: 'Databases',
            items: [
                {
                    className:
                        'devicon-postgresql-plain-wordmark colored devicon',
                    title: 'Postgres',
                },
                {
                    className: 'devicon-mongodb-plain-wordmark colored devicon',
                    title: 'MongoDB',
                },
                {
                    className: 'devicon-mysql-plain-wordmark colored devicon',
                    title: 'MySQL',
                },
                {
                    className: 'devicon-redis-plain-wordmark colored devicon',
                    title: 'Redis',
                },
            ],
        },
        {
            title: 'Frontend Frameworks',
            items: [
                {
                    className:
                        'devicon-react-original-wordmark colored devicon',
                    title: 'React',
                },
                {
                    className: 'devicon-vuejs-line-wordmark devicon',
                    title: 'Vue',
                },
                {
                    className: 'devicon-nuxtjs-plain devicon',
                    title: 'Nuxt',
                },
            ],
        },
        {
            title: 'Devops',
            items: [
                {
                    className: 'devicon-docker-plain-wordmark colored devicon',
                    title: 'Docker',
                },
            ],
        },
        {
            title: 'Editors',
            items: [
                {
                    className: 'devicon-vscode-plain-wordmark colored devicon',
                    title: 'VsCode',
                },
                {
                    className: 'devicon-vim-plain colored devicon',
                    title: 'Vim',
                },
            ],
        },
    ];

    return (
        <section className='section--page'>
            <h2>Tech stack & Tools</h2>

            <div id='wrapper--techstack__items'>
                {techStack.map((stack) => {
                    return (
                        <div
                            className='card--techstack'
                            id={stack.title}
                            title={stack.title}
                        >
                            <span>
                                {stack.items.map((item) => {
                                    return (
                                        <i
                                            key={item.className}
                                            className={item.className}
                                            title={item.title}
                                        ></i>
                                    );
                                })}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
