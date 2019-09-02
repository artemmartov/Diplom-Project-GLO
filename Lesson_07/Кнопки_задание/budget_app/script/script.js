'use strict';


    let startButton = document.getElementById('start'),

    plusButtonFirst = document.getElementsByTagName('button')[0],

    plusButtonSecond = document.getElementsByTagName('button')[1],

    checkbox = document.querySelector("#deposit-check"),

    placeForLetter = document.querySelectorAll('.additional_income-item'),

    budgetMonth = document.getElementsByClassName('result-total budget_month-value'),

    budgetDay = document.getElementsByClassName('budget_day-value'),

    expensesMonth = document.getElementsByClassName('expenses_month-value'),

    additionalIncome = document.getElementsByClassName('result-total additional_income-value'),

    additionalExpenses = document.getElementsByClassName('result-total additional_expenses-value'),

    resultIncome = document.getElementsByClassName('result-total income_period-value'),

    targetMonth = document.getElementsByClassName('result-total target_month-value'),
        
    salary = document.querySelector('.salary-amount'),

    incomeAmount = document.querySelector('.income-amount'),

    incomeTitle = document.querySelector('.income-title'),

    expensesTitle = document.querySelector('.expenses-title'),

    expensesAmount = document.querySelector('.expenses-amount'),

    additionalExpensesItem = document.querySelector('.additional_expenses-item'),

    targetAmount = document.querySelector('.target-amount'),

    periodSelect = document.querySelector('.period-select');


