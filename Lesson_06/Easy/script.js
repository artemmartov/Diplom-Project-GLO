'use strict';

let money,
    start = function(){
        do {
            money = prompt('Ваш месячный доход?', 100000);
                console.log('Money: ', money);
        }
        while(isNaN(money) || money === '' || money === null);
};

start();

let appData = { 
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++){
            let oblExpenses1 = prompt('Введите обязательную статью расходов');
            let costExpenses1 = prompt('Во сколько это обойдется?', 2500);
            while (isNaN(costExpenses1) || costExpenses1 === '' || costExpenses1 === null){
                let costExpenses1 = prompt('Во сколько это обойдется?', 2500);
            }
         appData.expenses[oblExpenses1] = +costExpenses1;   
        }
    },

    getExpensesMonth: function(){
         for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
         }
    },

    getBudget: function(){ 
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function(a, b){
        let target = a / b;
        if (target > 0){
            console.log('Цель будет достигнута');
        } else {
            console.log('Цель не будет достигнута');
        }
    return target;
    },

    getStatusIncome: function() {
        if (appData.budgetDay >= 800){
            console.log('высокий уровень дохода');
        } else if (300 <= appData.budgetDay < 800){
            console.log('Средний уровень дохода');
        } else if (appData.budgetDay > 300){
            console.log('Низкий уровень дохода');
        } else if (0 > appData.budgetDay){
            console.log('Что то пошло не так')
        }
    }

};

appData.asking();
appData.getExpensesMonth();
console.log(appData.expenses);
console.log('Расходы за месяц: ', appData.expensesMonth);
appData.getBudget();



for (let key in appData){
    console.log('Наша программа включает в себя данные ', key, appData[key]);
}



appData.getStatusIncome();

let targetMonth = appData.getTargetMonth(appData.mission, appData.budgetMonth);
console.log(Math.floor(targetMonth));


let getPeriodMonth = function(a, b){
    return a * b;
};
getPeriodMonth(targetMonth, appData.getBudget(money, appData.getExpensesMonth()));
//console.log(getPeriodMonth(targetMonth, appData.getBudget(money, appData.getExpensesMonth())));

//console.log(appData.getBudget(5, 2));



console.log(appData);
