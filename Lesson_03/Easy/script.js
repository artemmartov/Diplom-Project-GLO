'use strict';

let money = +prompt('Ваш месячный доход?');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(','));

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let income = 'фриланс 20000';

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);


let oblExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let costOfExpenses1 = +prompt('Во сколько это обойдется?');
let oblExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let costOfExpenses2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money-(costOfExpenses1+costOfExpenses2);
console.log(budgetMonth);

let mission = 500000; 
console.log(Math.ceil(mission/budgetMonth));

let budgetDay = (budgetMonth/30);
console.log(Math.floor(budgetDay));

let period = 6;

if (budgetDay >= 800){
    console.log('высокий уровень дохода');
} else if (300 <= budgetDay < 800){
    console.log('Средний уровень дохода');
} else if (budgetDay > 300){
    console.log('Низкий уровень дохода');
}













