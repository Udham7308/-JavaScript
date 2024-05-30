

let myDate = new Date()
//console.log(myDate);// ==>2024-05-30T09:23:04.827Z ||YYYY:MM:DD:T: Separator between date and
// time HH:MM:SS:FFF: Milliseconds:Z: Denotes UTC time.
// console.log(myDate.toString());// Thu May 30 2024 09:28:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Thu May 30 2024
// console.log(myDate.toTimeString()); //09:28:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toJSON());//2024-05-30T09:28:58.425Z
// console.log(myDate.toISOString());//2024-05-30T09:28:58.425Z
// console.log(myDate.toLocaleString()); //5/30/2024, 9:28:58 AM
// console.log(myDate.toLocaleDateString());////5/30/2024
// console.log(myDate.toLocaleTimeString('en-IN')); //9:28:58 am
// console.log(myDate.toUTCString()); // Thu, 30 May 2024 09:28:58 GMT
// console.log(myDate.getTimezoneOffset()); // 0

//console.log(typeof myDate); // Object

//let currentdate = new Date(2023,0,29);
//console.log(currentdate.toDateString()); // Sun Jan 29 2023
let currentdate = new Date("01-10-2024");
//console.log(currentdate.toLocaleDateString()); // Sun Jan 29 2023

let myTimeStep = Date.now();
//console.log(myTimeStep);
//console.log(currentdate.getTime()); // provide the value in milliseconds.
//console.log(Math.floor(Date.now()/1000)); // provide value on sec.

let newDate = new Date()
//console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"lomg",

})