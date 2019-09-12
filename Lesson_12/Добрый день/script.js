'use strict';
let date = new Date();
console.log(date);


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
console.log(day);
console.log(hours);


let p = document.createElement("p");
p.textContent = 'day';
document.body.appendChild(p);
