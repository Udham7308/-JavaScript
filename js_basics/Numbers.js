const score = 250;
//console.log(score);

const balance = new Number(100.6);
//console.log(typeof balance); // object
//const balance2 = balance.toString();
//console.log(typeof balance2);// String

//console.log(balance.length); // undefined
//console.log(balance.toString().length); // ==> 5
//console.log(balance.toFixed(3)); // used for precision value || ==> 100.600

const number = 124.8990322
// .toPrecision()
/* Number of significant digits. Must be in the range 1 - 21, inclusive.
It returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
it round off the value based on the given precision*/
//console.log(number.toPrecision(3));// ==> 125 

const num = 12345.527839
//console.log(num.toPrecision(2)); // ==> 1.2e+4 ..> 1.2x10^4
const num2 = 12300000000000;
// console.log(num2.toLocaleString()); // 12,300,000,000,000
// console.log(num2.toLocaleString('en-IN')); // 1,23,00,00,00,00,000

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4,6));
// console.log(Math.ceil(4.2)); //  reaches the top value
// console.log(Math.floor(4,6));

// console.log(Math.max(4,3,6,9)); // Provide the max value
// console.log(Math.min(4,3,6,9)); // Provide the min value

// console.log(Math.random()); // give value b/w 0 and 1.
// console.log((Math.random()*10 )+1); // Give the value grater than 1.
//console.log(Math.floor(Math.random()*10 )+1); // Round off the value greater than 1.

const min = 10;
const max = 20;

// (Math.floor(Math.random() * (max - min + 1)) + min.   ==> provide the rounded off min value.

console.log((Math.floor(Math.random() * (max - min + 1)) + min)) // eg (i)14,(ii)12,(iii)17,(iv)18,(v)16.
