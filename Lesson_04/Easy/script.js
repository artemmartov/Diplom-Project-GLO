'use strict';

let money = +prompt('Ваш месячный доход?'),

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),


deposit = confirm('Есть ли у вас депозит в банке?'),


income = 'фриланс 20000',




oblExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
costOfExpenses1 = +prompt('Во сколько это обойдется?'),
oblExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
costOfExpenses2 = +prompt('Во сколько это обойдется?'),

budgetMonth = money-(costOfExpenses1+costOfExpenses2),


mission = 500000, 


budgetDay = (budgetMonth/30);


let getStatusIncome = function() {
    if (budgetDay >= 800){
        console.log('высокий уровень дохода');
    } else if (300 <= budgetDay < 800){
        console.log('Средний уровень дохода');
    } else if (budgetDay > 300){
        console.log('Низкий уровень дохода');
    }
}
getStatusIncome();

let getExpensesMonth = function(a, b){
    return a + b; 
} 
getExpensesMonth(costOfExpenses1, costOfExpenses2);



let getAccumulatedMonth = function(a, b){ 
    return a - b; 
}

let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(costOfExpenses1, costOfExpenses2));





    
let getTargetMonth = function(a, b){
    return a / b;
}
console.log(Math.floor(getTargetMonth(mission, accumulatedMonth)));

let getPeriodMonth = function(a, b){
    return a * b;
}

console.log(getPeriodMonth(Math.floor(getTargetMonth(mission, accumulatedMonth)), accumulatedMonth));

let showTypeOf = function(data) {
    console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
