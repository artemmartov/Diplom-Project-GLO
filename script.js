let num = 266219
let digits = String(num).split("");

let result = digits.reduce(function(sum, current) {
    return sum * current;
}, );
console.log(result);

result **= 3;

console.log(String(result).substring(0, 2));
