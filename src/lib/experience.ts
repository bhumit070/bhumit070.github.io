// 17 December 2020: start of my professional work.
const STARTING_DATE = new Date(2020, 11, 17);

// Kept identical to the original Skills calculation so the number doesn't change.
export function getYearsOfExperience(currentDate: Date = new Date()): number {
  let yearsOfExperience =
    currentDate.getFullYear() - STARTING_DATE.getFullYear() - 1;
  const currentMonth = currentDate.getMonth();
  if (currentMonth === 11) {
    yearsOfExperience += 1;
  } else {
    yearsOfExperience = +`${yearsOfExperience}.${currentMonth + 1}`;
  }
  return yearsOfExperience;
}
