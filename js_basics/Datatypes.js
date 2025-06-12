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
//console.log(id===anotherId); // false because Symbol() function creates a unique primitive value. Even if you pass the same description
const id2 = Symbol.for('123');
const anotherId2 = Symbol.for('123');
console.log(id2 === anotherId2); // true
//With Symbol.for, both variables reference the same symbol from the global symbol registry.
const bignum = 1111111111111112690n;

const heros =["Shaktiman","Naagraj","Doga","Gangadhar"]; // Array

let myobj={
    name:"udham Singh",
    age:18,

 } // Object
 const myfunction = function(params) {
    console.log("Hello World");
    
 }
// console.log(typeof myfunction); // function
// console.log(typeof myobj); // object
// console.log(typeof heros); // array

// ........................> Memory Usage

//  Primitive(Stack memory), Non-primitive (Heap Memory)
// In stack memory we get a copy of variable and in heap memory, a reference for original variable in which we can changes.

let myYoutubename = "Udham7308"
let anotherName = myYoutubename// anotherName now also has "Udham7308"
anotherName = "AnimeEditX"  // anotherName now is "AnimeEditX", myYoutubename is unchanged

//console.log(myYoutubename);// anotherName now also has "Udham7308"
//console.log(anotherName); // anotherName now is "AnimeEditX", myYoutubename is unchanged


let user1 = {
   email: "user@gmail.com",
   upi:"user@sbi"
}
let user2 = user1;

user2.email = "udham@google.com" // Access of property of a object is given to other object by dot(.)
console.log(user1.email);
console.log(user2.email);
//user2 = user1 does not create a new object; it makes user2 reference the same object as user1.
//Updating the email property via user2 also updates it for user1, because both variables point to the same object in memory.
