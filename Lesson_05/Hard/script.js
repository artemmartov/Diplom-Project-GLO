'use strict';
let arr = ['11', '22', '33', '44', '55', '66', '77'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});


for (let i=2;  i<=100; i++) {
  let count = 0;
  for (let j=2; j<=i; j++) {
        if (i%j) {continue;}
        count += 1;
      }
      if (count == 1) 
      console.log(i);
    }
     
    