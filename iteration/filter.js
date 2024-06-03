const myNums =  [1,2,3,4,5,6,7,8,9,10]
 
/* Filter :- Returns the elements of an array that meet the condition specified in a callback function.
predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. 
thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value*/
 
//A.
//  const newNums  =  myNums.filter( (num) => num > 4)

//  console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
 
//B>
// const newNums2  = myNums.filter((num) => {
//    num > 4
  
// })
// console.log(newNums2); // [] // explicit return(SCope open ) so we have to add return keyword.

//C.
// const newNums2  = myNums.filter((num) => {
//     return num > 4
   
//  })
//  console.log(newNums2);  // [ 5, 6, 7, 8, 9, 10 ]
 
//  const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);