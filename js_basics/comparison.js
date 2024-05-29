
// console.log(null == 0); // false
// console.log(null > 0);// false
// console.log(null >= 0);// true 
// the reason is that an equalitycheck == and comparisons >,<,>=,<= work differently.
// comparisons convert null to a number, treating it as 0.That's why null >= 0 is true and null > 0 is false.

// console.log(undefined==0); // false   
// console.log(undefined>0);  // false
// console.log(undefined<0);  // false

// ===  ..> strict check
console.log("2"===2); // False
console.log("2"==2); // True