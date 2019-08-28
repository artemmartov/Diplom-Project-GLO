'use strict';

let money,

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),


deposit = confirm('Есть ли у вас депозит в банке?'),


income = 'фриланс 20000';




let start = function(){
    do {
        money = prompt('Ваш месячный доход?', 100000);
            console.log('Money: ', money);
    }
    while(isNaN(money) || money === '' || money === null);
}
start();



let getExpensesMonth = function(){
    let sum = 0;
    
    for (let i = 0; i < 2; i++){
        sum += sumOfExpenses();   
    }
return sum;  
};

let sumOfExpenses = function(){
    let oblExpenses1 = prompt('Введите обязательную статью расходов', 'кварплата');
    let costExpenses1 = prompt('Во сколько это обойдется?', 2500);
    while (isNaN(costExpenses1) || costExpenses1 === '' || costExpenses1 === null){
        costExpenses1 = prompt('Во сколько это обойдется?', 2500);
        console.log(typeof(costExpenses1));
    }
return +costExpenses1;
};





let expensesAmount = getExpensesMonth();




let getAccumulatedMonth = function(a, b){ 
    return a - b; 
};

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);


let budgetMonth = accumulatedMonth;
console.log(budgetMonth);

let mission = 500000, 



budgetDay = (budgetMonth/30);


let getStatusIncome = function() {
    if (budgetDay >= 800){
        console.log('высокий уровень дохода');
    } else if (300 <= budgetDay < 800){
        console.log('Средний уровень дохода');
    } else if (budgetDay > 300){
        console.log('Низкий уровень дохода');
    } else if (0 > budgetDay){
        console.log('Что то пошло не так')
    }
}
getStatusIncome();



let getTargetMonth = function(a, b){
    let target = a / b;
    if (target > 0){
        console.log('Цель будет достигнута');
    } else {
        console.log('Цель не будет достигнута');
    }
return target;
};

let targetMonth = getTargetMonth(mission, accumulatedMonth);


console.log(Math.floor(targetMonth));


let getPeriodMonth = function(a, b){
    return a * b;
};
getPeriodMonth(targetMonth, accumulatedMonth);


console.log(getPeriodMonth(targetMonth, accumulatedMonth));


let showTypeOf = function(data) {
    console.log(typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);