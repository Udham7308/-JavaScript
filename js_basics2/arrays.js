
// JS arrays are resizeable...
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

/* in JS array-copy operations creats shallow copies rather than deep copies.
 Shallow copy of an object is a copy whose properties share the same 
 reference (point to the same underlying values) as those of the 
 source object from  which the copy was made.
 
A DEEP copy is a copy whose properties do not share the same reference as
those of the source object grom which the copy was made.
 */

// Array methods

//  myArr.push(6) // add value in array
//  myArr.push(7)
//  myArr.pop() // no argument needed. remove last value of array.

//  myArr.unshift(9) // shift the all values of array and add the argument in the start. 
//  myArr.shift()// remove the value inserted in start through unshift() property.

//  console.log(myArr.includes(9)); // false
//  console.log(myArr.indexOf(3)); // 3

 const newArr = myArr.join()// Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr); // ==> [ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr);//==> 0,1,2,3,4,5
// console.log(typeof myArr);// ==> object
// console.log(typeof newArr);// ==> String

// ===> slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 4) // Returns a copy of a section of an array. For both start and end,

console.log(myn1);
console.log("B ", myArr);


 const myn2 = myArr.splice(1, 4) /* Removes elements from an array and,
  if necessary, inserts new elements in their place, returning the deleted elements.
 it manipulates the original array. after splice the original array returns the only rest values. */

 /* In slice end index in not included same as in splice but only if starting index is 0 
 oterwise it includes the ending index also.*/
 
 console.log(myn2);
 console.log("C ", myArr);


