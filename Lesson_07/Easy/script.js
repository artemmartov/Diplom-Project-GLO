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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
            while (!isNaN(itemIncome) || itemIncome === null){
                itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
            }
            let cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
            while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null){
                cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
            }
            appData.income[itemIncome] = cashIncome;
        }
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = [addExpenses];
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++){
            let oblExpenses1 = prompt('Введите обязательную статью расходов');
            while (!isNaN(oblExpenses1) || oblExpenses1 === null){
                oblExpenses1 = prompt('Введите обязательную статью расходов');
            }
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
        let targetMonth = appData.mission / appData.budgetMonth;
        console.log(Math.floor(targetMonth));
        if (targetMonth > 0){
            console.log('Цель будет достигнута');
        } else {
            console.log('Цель не будет достигнута');
        }
   

    },

    getStatusIncome: function() {
        if (appData.budgetDay >= 800){
            console.log('Высокий уровень дохода');
        } else if (300 <= appData.budgetDay < 800){
            console.log('Средний уровень дохода');
        } else if (appData.budgetDay > 300){
            console.log('Низкий уровень дохода');
        } else if (0 > appData.budgetDay){
            console.log('Что то пошло не так');
        }
    },

    getInfoDeposit: function(){
    if (appData.deposit){
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        while (isNaN(appData.percentDeposit, appData.moneyDeposit) || (appData.percentDeposit, appData.moneyDeposit)  === '' || (appData.percentDeposit1, appData.moneyDeposit)  === null){
            appData.percentDeposit = +prompt('Какой годовой процент?', '10');
            appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
        }
    } 
    },

    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
console.log(appData.expenses);
console.log('Расходы за месяц: ', appData.expensesMonth);
appData.getBudget();
appData.getStatusIncome();


for (let key in appData){
    console.log('Наша программа включает в себя данные ', key, appData[key]);
}

appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

let myString = appData.addExpenses.toString();
let newArray = myString.split(", ");
console.log(newArray);

let str = '';
newArray.forEach(item => str += item[0].toUpperCase() + item.slice(1, item.length) + ', ');
console.log(str);

