let money = 120000, 
income = 'фриланс 20000', 
addExpenses = 'Проезд, аренда, покупки', 
deposit = true, 
mission = 500000, 
period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log('Период ', period, 'месяцев \n Цель заработать ', mission, 'рублей');

addExpenses.toLowerCase();
console.log(addExpenses.split(', '));

let budgetDay = (money/30);

console.log(budgetDay);
console.log(money % 30);