/**
 * Exercises from exercism.org
 *
 * Freelancer Rates.
 */

const hourWorkedDay = 8;
const billableDays = 22;

dayRate = hourlyRate => hourlyRate * hourWorkedDay;

daysInBudget = (budget, hourlyRate) =>  Math.floor(budget / dayRate(hourlyRate));

priceWithMonthlyDiscount = (hourlyRate, numberDays, monthlyDiscountRate) => {
  const months = Math.floor(numberDays / billableDays);
  const monthPrince = months * billableDays * dayRate(hourlyRate);
  const remainingDays = numberDays % billableDays; 
  return Math.ceil(monthPrince + remainingDays * dayRate(hourlyRate) - monthlyDiscountRate * monthPrince );
};

console.log(dayRate(89));
console.log(daysInBudget(20000, 89));
console.log(priceWithMonthlyDiscount(89, 230, 0.42));

module.export = { dayRate, daysInBudget, priceWithMonthlyDiscount }


