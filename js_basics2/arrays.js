
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

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 4) // Returns a copy of a section of an array. For both start and end,

//console.log(myn1);
//console.log("B ", myArr);


 const myn2 = myArr.splice(1, 4) /* Removes elements from an array and,
  if necessary, inserts new elements in their place, returning the deleted elements.
 it manipulates the original array. after splice the original array returns the only rest values. */

 /* In slice end index in not included same as in splice but only if starting index is 0 
 oterwise it includes the ending index also.*/
 
 //console.log(myn2);
 //console.log("C ", myArr);


 const marvel_heros = ["thor", "Ironman", "spiderman"]
 const dc_heros = ["superman", "flash", "batman"]
 
 //console.log(marvel_heros.push(dc_heros)); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 
 // It includes the 2nd array into first as a single element.
 
 // console.log(marvel_heros[3][1]);
 
 const allHeros = marvel_heros.concat(dc_heros) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
 //console.log(allHeros);

 const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator. we can add as many as we have. it spread the values of all arrays and collect them in an array. 
//console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat(x) where x is the depth of nested arrays. it returns the flat values of all nested array as a single array.Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//console.log(real_another_array);

console.log(Array.isArray("Udham")) // ArrayConstructor.isArray() --> tells about input is array or not.
console.log(Array.from("Udham")) // ArrayConstructor.from<string> ==>Creates an array from an iterable object.
console.log(Array.from({name: "Udham"})) //==> []. we have to specifies declears from which we have to create an array from keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array.of() --> Returns a new array from a set of elements.