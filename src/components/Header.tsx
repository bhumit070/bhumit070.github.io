import { workHistory } from '../config/work_history';

type SocialLinks = {
  name: string;
  link: string;
};

export function Header() {
  const currentWorkingCompany = workHistory[0];

  const companyName = currentWorkingCompany.title_and_company
    .split('|')[1]
    .trim();

  const socialLinks: Array<SocialLinks> = [
    {
      name: 'Hire Me',
      link: 'https://www.upwork.com/freelancers/~01d62cbe58c2a02090',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/bhoomit-ganatra/',
    },
    {
      name: 'Github',
      link: 'https://github.com/bhumit070/',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/bhumit070',
    },
    {
      name: 'Dev.to',
      link: 'https://dev.to/bhumit070',
    },
    {
      name: 'Medium',
      link: 'https://medium.com/@bhumit070',
    },
  ];

  return (
    <>
      <section id='wrapper--hero' className='section--page'>
        <img
          id='profile-pic'
          alt='Profile Pic'
          src='https://media.licdn.com/dms/image/v2/D4D03AQFPgizuWKo50w/profile-displayphoto-shrink_400_400/B4DZTqhDAgGkAg-/0/1739101319844?e=1747267200&v=beta&t=x9QwZjsV7xRZCvsaundxgkolic7Qdb_yIIr8W570kws'
        />

        <div>
          <h1 id='user-name'>Bhoomit Ganatra</h1>
          <p id='bio'>
            Software developer, &nbsp;
            <a href={currentWorkingCompany.company_link || '#'} target='_blank'>
              @{companyName}
            </a>
            .
          </p>
          <a id='personal-email'></a>
        </div>
      </section>

      <section className='section--page'>
        <div id='socials--list'>
          {socialLinks.map((socialLink) => {
            return (
              <a href={socialLink.link} target='_blank'>
                {socialLink.name}
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
