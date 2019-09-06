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
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function(){
        if (salaryAmount.value.length < 1){
            start.removeAttribute('disabled');

            return;
        }
        this.budget = +salaryAmount.value;
        console.log(salaryAmount.value);
        
        this.getExpenses();
        this.getExpensesMonth();
        this.getIncome();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.periodSelect();
        this.showResult();
        start.style.display = 'none';
        cancel.style.display ='block';
        
        
        
        
        
        calc.querySelectorAll('input').forEach(function(item) {
            if (item !== periodSelect){
            item.disabled = true;
            }
        });

        if (cancel.style.display ='block'){
            let text = calc.querySelectorAll('div');
            text.textContent = '';
        }
        
    },

    showResult: function(){
        budgetMonthValue.value = this.budgetMonth * periodSelect.value; 
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = +this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        IncomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('change', function(){
        IncomePeriodValue.value = this.calcPeriod();
        }.this);
       
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
            this.income[itemIncome] = +cashIncome;
        }
        }, this);
        for (let key in this.income){
            this.incomeMonth += this.income[key];
        }
    },

    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                this.addExpenses.push(item);
            }
        }, this);

    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
            this.addIncome.push(itemValue);
        }
        }, this);

    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            this.expenses[itemExpenses] = +cashExpenses;
        }
        }, this);

    },

    getExpensesMonth: function(){
         for (let key in this.expenses){
            this.expensesMonth += this.expenses[key];
         }
    },

    getBudget: function(){ 
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },

    getTargetMonth: function(){
    return targetAmount.value / this.budgetMonth;
    },

    getStatusIncome: function() {
        if (this.budgetDay >= 800){
            console.log('Высокий уровень дохода');
        } else if (300 <= this.budgetDay < 800){
            console.log('Средний уровень дохода');
        } else if (this.budgetDay > 300){
            console.log('Низкий уровень дохода');
        } else if (0 > this.budgetDay){
            console.log('Что то пошло не так');
        }
    },

    getInfoDeposit: function(){
    if (this.deposit){
        this.percentDeposit = prompt('Какой годовой процент?', '10');
        this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        while (isNaN(this.percentDeposit, this.moneyDeposit) || (this.percentDeposit, this.moneyDeposit)  === '' || (this.percentDeposit1, this.moneyDeposit)  === null){
            this.percentDeposit = +prompt('Какой годовой процент?', '10');
            this.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
        }
    } 
    },

    calcPeriod: function(){
        return this.budgetMonth * periodSelect.value;
    },

    periodSelect: function(){
        selectValue.innerHTML = periodSelect.value;

    },

    reset: function(){
        let textInput = document.querySelectorAll('.data input[type = text]'),
            resultInput = document.querySelectorAll('.result input[type = text]');

            textInput.forEach(function(elem){
                elem.value = '';
                elem.removeAttribute('disabled');
                periodSelect.value = '0';
                selectValue.innerHTML = periodSelect.value;
            });
            resultInput.forEach(function(elem){
                elem.value = '';
            });
            for (let i = 1; i < incomeItems.length; i++){
                incomeItems[i].parentNode.removeChild[incomeItems[i]];
                incomePlus.style.display = 'block';
            }
            for (let i = 1; i < expensesItems.length; i++){
                expensesItems[i].parentNode.removeChild[expensesItems[i]];
                expensesPlus.style.display = 'block';
            }

            cancel.style.display = 'none';
            start.style.display = 'block';
            incomePlus.removeAttribute('disabled');
            expensesPlus.removeAttribute('disabled');
            checkbox.checked = false;

            this.income = {};
            this.incomeMonth = 0;
            this.addIncome = [];
            this.expenses = {};
            this.addExpenses = [];
            this.deposit = false;
            this.percentDeposit = 0;
            this.moneyDeposit = 0;
            this.budget = 0;
            this.budgetDay = 0;
            this.budgetMonth = 0;
            this.expensesMonth = 0;
        }   
    

};



appData.getTargetMonth();

appData.addExpensesBlock();
cancel.addEventListener('click', appData.reset.bind(appData));
start.addEventListener('click', appData.start.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.periodSelect);



appData.getStatusIncome();









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