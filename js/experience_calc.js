const experienceYearSpan = document.querySelector('#experience-years');
const currentDate = new Date()
const startingDate = new Date(2020, 11, 17); // 17 december 2020
// find years of gap in current date in starting date
let yearsOfExperience = (currentDate.getFullYear() - startingDate.getFullYear()) - 1;
const currentMonth = currentDate.getMonth();
if (currentMonth === 11) {
	yearsOfExperience += 1;
} else {
	yearsOfExperience = `${yearsOfExperience}.${currentMonth + 1}`;
}
experienceYearSpan.innerText = yearsOfExperience;