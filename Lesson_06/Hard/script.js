'use strict';

let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let elem = document.createElement('p'),
    week = document.createTextNode(arr),
    days = document.getElementById('days');

elem.appendChild(week);
days.parentNode.appendChild(elem);


console.log(elem);