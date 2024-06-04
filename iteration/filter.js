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

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);