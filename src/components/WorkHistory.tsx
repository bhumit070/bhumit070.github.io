import { workHistory } from '../config/work_history';

export function WorkHistory() {
    return (
        <section id='work-history-wrapper' className='section--page'>
            <h2>Work History</h2>

            <div className='line-break'></div>

            {workHistory.map((work) => {
                return (
                    <div className='card--work-history'>
                        <strong>{work.title_and_company}</strong>
                        <p>{work.from_and_to}</p>
                        <p>{work.description}</p>
                        <ul>
                            {work.experience.map((experience) => (
                                <li
                                    id={experience}
                                    dangerouslySetInnerHTML={{
                                        __html: experience,
                                    }}
                                ></li>
                            ))}
                        </ul>
                        <div className='line-break'></div>
                    </div>
                );
            })}
        </section>
    );
}
