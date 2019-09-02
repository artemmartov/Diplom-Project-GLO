'use strict';


let myElem = document.querySelectorAll('.book'),
    collect = document.querySelector('.books');
console.log(myElem);

collect.insertBefore(myElem[0], myElem[2]);
collect.insertBefore(myElem[4], myElem[2]);
collect.insertBefore(myElem[2], null);

let basic = document.querySelector('body');
console.log(basic);
basic.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

let nameChapter = document.querySelectorAll('h2');
nameChapter[2].textContent = 'Книга 3. this и Прототипы Объектов';

let parts = document.querySelectorAll('div');
console.log(parts[6]);
basic.removeChild(parts[6]);

let list = document.querySelectorAll('ul'),
    chapter1 = list[1].querySelectorAll('li'),
    chapter4 = list[4].querySelectorAll('li');
    



console.log(myElem[2]);


list[1].insertBefore(chapter1[2], chapter1[10]);
list[1].insertBefore(chapter1[4], chapter1[9]);
list[1].insertBefore(chapter1[5], chapter1[9]);
list[1].insertBefore(chapter1[7], chapter1[9]);


list[4].insertBefore(chapter4[9], chapter4[2]);
list[4].insertBefore(chapter4[4], chapter4[5]);
list[4].insertBefore(chapter4[2], chapter4[5]);
list[4].insertBefore(chapter4[5], chapter4[8]);

let newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
list[5].appendChild(newChapter);
console.log(newChapter);
