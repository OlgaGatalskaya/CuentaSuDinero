let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optExpensedValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    inputExpensesItem = document.getElementsByClassName('expenses-item'),
    btnExpensesItem = document.getElementsByTagName('button')[0],
    btnOptionalExpItem = document.getElementsByTagName('button')[1],
    inputOptionalExpItem = document.querySelectorAll('.optionalexpenses-item'),
    btnCountBudget = document.querySelector('.count-budget-btn'),
    inputChooseIncome = document.querySelector('.choose-income'),
    checkboxSavings = document.querySelector('#savings'),
    inputSum = document.querySelector('.choose-sum'),
    inputPercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');




let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

startBtn.addEventListener('click', function () {
    time = prompt('Ingrese la fecha en el formato YYYY-MM-DD', '');
    money = +prompt('¿Cuál es su presupuesto mensual?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('¿Cuál es su presupuesto mensual?');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth();
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnExpensesItem.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < inputExpensesItem.length; i++) {
        let a = inputExpensesItem[i].value,
            b = inputExpensesItem[++i].value;
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
            console.log('ok');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }

    }

    expensesValue.textContent = sum;
});

btnOptionalExpItem.addEventListener('click', function () {
    for (let i = 0; i < inputOptionalExpItem.length; i++) {
        let opt = inputOptionalExpItem[i].value;
        appData.optionalExpenses[i] = opt;
        optExpensedValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});