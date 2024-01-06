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
        `✔️ ${yearsOfExperience} Years experience with Backend &
                    Frontend development`,
        `✔️ Extensive knowledge in API & Database Design.`,
    ];

    return (
        <section className='section--page'>
            <h2>Skills & Qualifications</h2>
            <ul id='qualifications--list'>
                {skills.map((skill) => (
                    <li>{skill}</li>
                ))}
            </ul>
        </section>
    );
}
