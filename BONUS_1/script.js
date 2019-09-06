'use strict';

let numA = document.querySelector('#a').value,
    numB = document.querySelector('#b').value,
    buttonSum =document.querySelector('#sum'),
    buttonMult = document.querySelector('#mult'),
    res = document.querySelector('#res');



const calculator = {
    Sum: function(){
        numA = parseInt(numA);
        numB = parseInt(numB);
        let result = numA + numB;
        res.innerHTML = result; 
        console.log('плюс');
    },

    Mult: function(){
        numA = parseInt(numA);
        numB = parseInt(numB);
        let result = numA * numB;
        res.innerHTML = result;
        console.log('умножить');
    },
};

buttonSum.addEventListener('click', calculator.Sum());
buttonMult.addEventListener('click', calculator.Mult());







    





