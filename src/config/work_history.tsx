export type TWorkHistory = {
    title_and_company: string;
    company_link?: string;
    from_and_to: string;
    description: string;
    experience: Array<string>;
};

export const workHistory: Array<TWorkHistory> = [
    {
        title_and_company: '🚧 Software Developer | Cornerstone OnDemand',
        company_link: 'https://www.cornerstoneondemand.com/ ',
        from_and_to: '11/2023 - Present',
        description: `Building MyGuide.org`,
        experience: [
            `Building <a href='https://myguide.org'><b>MyGuide.org</b></a>`,
        ],
    },
    {
        title_and_company: '🚧 Software Developer | Yudiz',
        company_link: 'https://www.yudiz.com/',
        from_and_to: '02/2022 - 11/2023',
        description: `Worked on different different projects as per client requirement.`,
        experience: [
            `Created <b>admin panel</b> backend for a <b> 2d shooter game </b> + Logic for <b> earning system </b> for that game`,
            `Worked on <b>existing backend</b> for an application (<b>PERN stack</b>) & modify <b>admin panel</b> built in react.`,
        ],
    },
    {
        title_and_company: '🚧 Software Developer | IncipientInfo',
        from_and_to: '12/2020 - 02/2022',
        description: `Worked on different different projects as per client requirement.`,
        experience: [
            `Built <b>Apis</b> in NodeJs`,
            `Created <b>PWA ( Progressive Web App) </b> for some projects`,
            `Worked with <b>graphql</b>`,
        ],
    },
];
