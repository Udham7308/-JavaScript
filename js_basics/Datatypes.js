"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("udham")


let name = "udham"
let age = 18
let isLoggedIn = false
let state;

/*  Primitive datatypes =>  call by value
number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value => empty
undefined => value not provided yet.
symbol => unique

// Non-primitive datatypes => call by reference
 Functions
 object
Arrays 
*/ // above all's datatype is called as function

//console.log(typeof undefined); // undefined
//console.log(typeof null); // object
const id = Symbol('123');
const anotherId = Symbol('123')
//console.log(id===anotherId); // false 
const bignum = 1111111111111112690n;

const heros =["Shaktiman","Naagraj","Doga","Gangadhar"]; // Array

let myobj={
    name:"udham Singh",
    age:18,

 } // Object
 const myfunction = function(params) {
    console.log("Hello World");
    
 }
// console.log(typeof myfunction);
// console.log(typeof myobj);
// console.log(typeof heros);

// ........................> Memory Usage

//  Primitive(Stack memory), Non-primitive (Heap Memory)
// In stack memory we get a copy of variable and in heap memory, a reference for original variable in which we can changes.

let myYoutubename = "Udham7308"
let anotherName = myYoutubename
anotherName = "AnimeEditX"

// console.log(myYoutubename);
// console.log(anotherName);

let user1 = {
   email: "user@gmail.com",
   upi:"user@sbi"
}
let user2 = user1;

user2.email = "udham@google.com" // Access of property of a object is given to other object by dot(.)
console.log(user1.email);
console.log(user2.email);