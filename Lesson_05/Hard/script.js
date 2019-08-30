'use strict';
let arr = ['11', '22', '33', '44', '55', '66', '77'];


let result = arr.filter(elem => elem[0]==2 || elem[0]==4 );
console.log(result.join(', '));



for (let i=2;  i<=100; i++) {
  let count = 0;
  for (let j=2; j<=i; j++) {
        if (i%j) {continue;}
        count += 1;
      }
      if (count == 1) 
      console.log(i, ' - Делители этого числа: 1 и', i);
    }
     
    