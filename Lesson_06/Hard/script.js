'use strict';

let arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let elem = document.createElement('ul'),
    date = new Date(),
    days = document.querySelector('.days');
   



arr.forEach(function(day, i){
    let li = document.createElement('li');
    li.textContent = day;
    if (day === 'Суббота' || day === 'Воскресенье') {
        li.classList.add('weekends');
    }
    if (i === date.getDay()) {
        console.log(date.getDay());
        li.classList.add('today');
    }
    elem.appendChild(li);
});

days.appendChild(elem);

