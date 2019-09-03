'use strict';


    let start = document.getElementById('start'),

    incomePlus = document.getElementsByTagName('button')[0],

    expensesPlus = document.getElementsByTagName('button')[1],

    checkbox = document.querySelector("#deposit-check"),

    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],

    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],

    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],

    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],

    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],

    IncomePeriodValue = document.querySelector('.income_period-value'),

    targetMonthValue = document.querySelector('.target_month-value'),
        
    salaryAmount = document.querySelector('.salary-amount'),

    incomeTitle = document.querySelector('.income-title'),

    expensesTitle = document.querySelector('.expenses-title'),

    expensesItems = document.querySelectorAll('.expenses-items'),

    additionalExpensesItem = document.querySelector('.additional_expenses-item'),

    targetAmount = document.querySelector('.target-amount'),

    periodSelect = document.querySelector('.period-select'),

    incomeItems = document.querySelectorAll('.income-items'),

    selectValue = document.querySelector('.period-amount'),

    cancel = document.querySelector('#cancel'),

    doubleButton = document.querySelector('.control'),

    calc = document.querySelector('.calc');

    
let appData = { 
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function(){
        if (salaryAmount.value.length < 1){
            start.removeAttribute('disabled');
            
            return;
        }
        appData.Budget = +salaryAmount.value;
        console.log(salaryAmount);

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.periodSelect();
        appData.showResult();
        start.style.display = 'none';
        cancel.style.display ='block';
        

        calc.querySelectorAll('input').forEach(function(item) {
            item.disabled = true;
        });
    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth * periodSelect.value; 
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = +appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        IncomePeriodValue.value = appData.calcPeriod();
    },


    addExpensesBlock: function(){
        let cloneExpensesItems = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
        
    },
    addIncomeBlock: function(){
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    },

    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
            appData.income[itemIncome] = cashIncome;
        }
        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
            
        });
    },

    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });

    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
            appData.addIncome.push(itemValue);
        }
        });


    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            appData.expenses[itemExpenses] = cashExpenses;
        }
        });

    },

    getExpensesMonth: function(){
         for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
         }
    },

    getBudget: function(){ 
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function(){
    return targetAmount.value / appData.budgetMonth;
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

    calcPeriod: function(){
        return appData.budgetMonth * periodSelect.value;
    },

    periodSelect: function(event){
        selectValue.innerHTML = periodSelect.value;
    },
    doubleButton: function(){
        if (start){
            

        }
    }
};
appData.getTargetMonth();

appData.addExpensesBlock();
cancel.addEventListener('click', appData.cancel);
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change',appData.periodSelect);



appData.getStatusIncome();



// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcPeriod());

// let myString = appData.addExpenses.toString();
// let newArray = myString.split(", ");
// console.log(newArray);

// let str = '';
// newArray.forEach(item => str += item[0].toUpperCase() + item.slice(1, item.length) + ', ');
// console.log(str);

// asking: function(){
        
//     appData.deposit = confirm('Есть ли у вас депозит в банке?');
// for (let i = 0; i < 2; i++){
//     let oblExpenses1 = prompt('Введите обязательную статью расходов');
//     while (!isNaN(oblExpenses1) || oblExpenses1 === null){
//         oblExpenses1 = prompt('Введите обязательную статью расходов');
//     }
//     let costExpenses1 = prompt('Во сколько это обойдется?', 2500);
//     while (isNaN(costExpenses1) || costExpenses1 === '' || costExpenses1 === null){
//         let costExpenses1 = prompt('Во сколько это обойдется?', 2500);
//     }
//  appData.expenses[oblExpenses1] = +costExpenses1;   
// }
// },

// function(){
//     if(confirm('Есть ли у вас дополнительный источник заработка?')){
//         let itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
//         while (!isNaN(itemIncome) || itemIncome === null){
//             itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
//         }
//         let cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
//         while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null){
//             cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
//         }
//         appData.income[itemIncome] = cashIncome;
//     }

//     for (let key in appData.income){
//         appData.incomeMonth += +appData.income[key];
//     }

// },
