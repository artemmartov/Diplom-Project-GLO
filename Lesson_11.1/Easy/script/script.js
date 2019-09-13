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
    calc = document.querySelector('.calc'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');



const AppData = function(){

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

};

AppData.prototype.start = function(){
    if (salaryAmount.value.length < 1){
        start.removeAttribute('disabled');

        return;
    }

    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getExpensesMonth();
    this.getIncome();
    this.getAddBudget('addExpenses', true);
    this.getAddBudget('addIncome', false);
    this.getInfoDeposit();
    this.getBudget();
    this.periodSelect();
    this.showResult();
    start.style.display = 'none';
    cancel.style.display ='block';
    
    calc.querySelectorAll('input').forEach((item) => {
        if (item !== periodSelect){
        item.disabled = true;
        }
    });

    if (cancel.style.display ='block'){
        let text = calc.querySelectorAll('div');
        text.textContent = '';
    }
    
    
};

AppData.prototype.showResult = function(){
    const _this = this;
    budgetMonthValue.value = this.budgetMonth * periodSelect.value; 
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = +this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    IncomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('change', function(){
    IncomePeriodValue.value = _this.calcPeriod();
    }.bind());
   
};

AppData.prototype.addBudgetBlock = function(elemClone, elemButton, elemSelector){
    let cloneItem = elemClone.cloneNode(true);

    elemClone.parentNode.insertBefore(cloneItem, elemButton);
    let elements = document.querySelectorAll(elemSelector);
    cloneItem.querySelectorAll('input').forEach((item) => {
        item.value = '';
    });
    if (elements.length === 3) {
        elemButton.style.display = 'none';
    }


};


AppData.prototype.getIncome = function(){
    incomeItems = document.querySelectorAll('.income-items');
    console.log(incomeItems);
    incomeItems.forEach((item) => {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
    if(itemIncome !== '' && cashIncome !== ''){
        this.income[itemIncome] = +cashIncome;
    }
    });
    for (let key in this.income){
        this.incomeMonth += this.income[key];
    }
    console.log(incomeItems);
};

AppData.prototype.getAddBudget = function(addPlace, expenses){
    let addBudget, itemValue;
    if (expenses) {
        addBudget = additionalExpensesItem.value.split(', ');
    } else {
        addBudget = additionalIncomeItem;
    }
    addBudget.forEach((item) => {
        let itemValue = (expenses) ? item.trim() : item.value.trim();
        if (itemValue !== ''){
            this[addPlace].push(itemValue);
        } 
    });

};

AppData.prototype.getExpenses = function(){
    expensesItems = document.querySelectorAll('.expenses-items');

    expensesItems.forEach((item) => {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            this.expenses[itemExpenses] = +cashExpenses;
    }
    });

};

AppData.prototype.getExpensesMonth = function(){
     for (let key in this.expenses){
        this.expensesMonth += this.expenses[key];
     }
};

AppData.prototype.getBudget = function(){ 
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function(){
return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getStatusIncome = function() {
    if (this.budgetDay >= 800){
        console.log('Высокий уровень дохода');
    } else if (300 <= this.budgetDay < 800){
        console.log('Средний уровень дохода');
    } else if (this.budgetDay > 300){
        console.log('Низкий уровень дохода');
    } else if (0 > this.budgetDay){
        console.log('Что то пошло не так');
    }
};

AppData.prototype.getInfoDeposit = function(){
if (this.deposit){
    this.percentDeposit = depositPercent.value;
    this.moneyDeposit = depositAmount.value;
    while (isNaN(this.percentDeposit, this.moneyDeposit) || (this.percentDeposit, this.moneyDeposit)  === '' || (this.percentDeposit1, this.moneyDeposit)  === null){
        this.percentDeposit = +depositPercent.value;
        this.moneyDeposit = +depositAmount.value;
    }
} 
};

AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * periodSelect.value;
};

AppData.prototype.periodSelect = function(){
    selectValue.innerHTML = periodSelect.value;

};

AppData.prototype.reset = function(){
    let textInput = document.querySelectorAll('.data input[type = text]'),
        resultInput = document.querySelectorAll('.result input[type = text]');

        textInput.forEach((elem) => {
            elem.value = '';
            elem.removeAttribute('disabled');
            periodSelect.value = '0';
            selectValue.innerHTML = periodSelect.value;
        });

        resultInput.forEach((elem) => elem.value = '');

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
    };   
    AppData.prototype.eventsListeners = function(){
        appData.getTargetMonth();
        cancel.addEventListener('click', this.reset.bind(this));
        start.addEventListener('click', this.start.bind(this));
        expensesPlus.addEventListener('click', appData.addBudgetBlock.bind(appData, expensesItems[0], expensesPlus, '.expenses-items'));
        incomePlus.addEventListener('click', appData.addBudgetBlock.bind(appData, incomeItems[0], incomePlus, '.income-items'));
        periodSelect.addEventListener('input', this.periodSelect);

    };

const appData = new AppData();
console.log(appData);


checkbox.addEventListener('change', function(){
    if (checkbox.checked === true){
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit = 'true';
        depositBank.addEventListener('change', function(){
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === 'other'){
                depositPercent.style.display = 'inline-block';
                depositPercent.value = '';
            } else {
                depositPercent.style.display = 'none';
                depositPercent.value = selectIndex;
            }

        });
    } else {
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value = '';
        appData.deposit = 'false';
    }
});

appData.eventsListeners();





















