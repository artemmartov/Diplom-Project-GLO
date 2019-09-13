'use strict';
let date = new Date();
let newYear = new Date(2019, 11, 31);

const timeMinus = () => {
   let timeRemaining = (newYear - date) / 1000;
   let seconds = Math.floor(timeRemaining % 60);
   let minutes = Math.floor((timeRemaining / 60) % 60);
   let hours = Math.floor((timeRemaining / 60 / 60) % 24);
   let day1 = Math.floor(timeRemaining / 60 / 60 / 24);
   
   return {day1};
};

const getWeekDay = (date) => {
   let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
 
   return week[date.getDay()];
};


let hours = date.getHours();


let day;
if (hours >= 6 && hours <= 12){
   day = 'Доброе утро!';
} else if (hours > 12 && hours <= 18){
   day = 'Добрый день!';
} else if (hours > 18 && hours <= 22){
   day = 'Добрый вечер!';
} else if (hours > 22 || hours < 6){
   day = 'Доброй ночи!';
}



let p = document.createElement("p");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");

let timer = timeMinus();

p.textContent = day;
p1.textContent = 'Сегодня: ' + getWeekDay(date);
p2.textContent = 'Текущее время: ' + date.toLocaleTimeString();
p3.textContent = 'До нового года осталось ' + timer.day1 + ' дней';

document.body.appendChild(p);
document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(p3);

console.log(timeMinus());
