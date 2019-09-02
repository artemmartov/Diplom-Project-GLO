'use strict';


let startButton = document.querySelector("#start");

let allButton = document.querySelectorAll("button"),
    plusFirstButton = allButton[0],
    plusSecondButton = allButton[1];

let checkbox = document.querySelector("#deposit-check"),

    placeForLetter = document.querySelectorAll('.additional_income-item'),

    budgetMonth = document.querySelector('.budget_month-value'),

    budgetDay = document.querySelector('.budget_day-value'),
    
    expensesMonth = document.querySelector('.expenses_month-value'),

    additionalIncome = document.querySelector('.result-additional_income'),

    additionalExpenses = document.querySelector('.result-additional_expenses'),

    resultIncome = document.querySelector('.result-income_period'),

    targetMonth = document.querySelector('.result-target_month'),

    salary = document.querySelector('.salary-amount'),

    incomeAmount = document.querySelector('.income-amount'),

    incomeTitle = document.querySelector('.income-title'),

    expensesTitle = document.querySelector('.expenses-title'),

    expensesAmount = document.querySelector('.expenses-amount'),

    additionalExpensesItem = document.querySelector('.additional_expenses-item'),

    targetAmount = document.querySelector('.target-amount'),

    periodSelect = document.querySelector('.period-select');


