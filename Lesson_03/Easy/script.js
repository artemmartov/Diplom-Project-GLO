'use strict';

let money = +prompt('Ваш месячный доход?'),

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
console.log(addExpenses.split(','));

deposit = confirm('Есть ли у вас депозит в банке?'),
console.log(deposit);

income = 'фриланс 20000',

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);


oblExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
costOfExpenses1 = +prompt('Во сколько это обойдется?'),
oblExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
costOfExpenses2 = +prompt('Во сколько это обойдется?'),

budgetMonth = money-(costOfExpenses1+costOfExpenses2),
console.log(budgetMonth);

mission = 500000, 
console.log(Math.ceil(mission/budgetMonth));

budgetDay = (budgetMonth/30),
console.log(Math.floor(budgetDay));


if (budgetDay >= 800){
    console.log('высокий уровень дохода');
} else if (300 <= budgetDay < 800){
    console.log('Средний уровень дохода');
} else if (budgetDay > 300){
    console.log('Низкий уровень дохода');
}













