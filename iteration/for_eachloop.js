const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach(  (item) => {
//     console.log(item);
// }) 

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe) // Here give only function's reference not execute it.

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item.languageName);
    //console.log(item.languageFileName);
} )
 // A.
// const value = coding.forEach( (item)=>{
//     console.log(item);
// })
// console.log(value); // undefined
 
// B.
const value = coding.forEach( (item)=>{
    //console.log(item);
    return item
})
console.log(value) // undefined 
 /* forEach() executes the callback function once for each element in the Set object; it does not return a value. */

 const myNums = [1,2,3,4,5,,6,7,8,9,10]

const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }   
 })
 console.log(newNums);// [ 5, 6, 7, 8, 9, 10 ]

