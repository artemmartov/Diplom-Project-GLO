'use strict';
let arr = ['11', '22', '33', '44', '55', '66', '77'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});