const name = "Udham"
const surename = "singh"

//console.log("Hello everyone. My name is"name +" "+ surename + "and my age is 18"); // Hello everyone my name is Udham Singh and my age is 18.

//console.log(``); // backtick method or String interpolation use for modify the string. in this the variable name is write as ${ variable name}
//console.log(` Hello everyone. My name is ${name} ${surename} and my age is 18.`);

const name2 = new String("UdhamSingh") // String will be in key value pair.
// console.log(name2);
// console.log(name2[0]); // u
// console.log(name2[3]); // a // key -> 3, value --> a


// console.log(name2.__proto__); // prototype --> {}
// console.log(name2.__proto__.console); // prototype of console  --> undefined
// console.log(name2.__proto__.name2); // prototype of name2 is undefined

//console.log(name2.length); // We can use all prototypes without __proto__.
//console.log(name2.toUpperCase()); // prototype for all uppercase  // ----> UDHAMSINGH
// console.log(name2.charAt(3));
// console.log(name2.indexOf('d')); // 1

const newString = name2.substring(0,6) // last index is not consider.
//console.log(newString);
const name3 = "TheYellowFlash"
const newstring = name3.slice(0,4);
//console.log(newstring);
const newstring2 = name3.slice(-7,12);
//console.log(newstring2); 
const newstring3 = name3.slice(1,-5);
//console.log(newstring3); 
/* For +ve slicing write the string from startinng index to ending index-1.
 For  -ve slicing: [-n,m] => cut before the nth index and after mth index from start. -ve counting start from the end with starting index -1.
 for  -ve slicing:[n,-m] => start from the nth index and cut the m from end.  */

 const string2 = "    UdhamSingh      ";
 //console.log(string2);
 //console.log(string2.trim());// Removes the leading and trailing white space and line terminator characters from a string.

 const url = "https://anime.com/udham%20singh"
 //console.log(url.replace('%20','-')); // Replaces text in a string, using a regular expression or search string.
 //console.log(url.includes('Sagar')); // Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

 const name4 = new String("Udham.Singh.sagar")
 console.log(name4.split('.')); // split string in arrays based on any. ==>  [ 'Udham', 'Singh', 'sagar' ]
