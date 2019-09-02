'use strict';

let dateObj = new Date();
console.log(dateObj);

let funcTime = function(date){
    let dd = date.getDate();
    if (dd < 10){
        dd = '0' + dd;
    }

    let mm = date.getMonth() + 1;
    if (mm < 10){
        mm = '0' + mm;
    }

    let yy = date.getFullYear() % 100;
    if (yy < 10){
        yy = '0' + yy;
    }

    let hh = date.getHours();
    if (hh < 10){
        hh = '0' + hh;
    }

    let mn = date.getMinutes();
    if (mn < 10){
        mn = '0' + mn;
    }

    let sc = date.getSeconds();
    if (sc < 10){
        sc = '0' + sc;
    }


return hh + ':' + mn + ':' + sc + ' ' + dd + '.' + mm + '.' + yy;

};

console.log(funcTime(dateObj));