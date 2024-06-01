const user = {
    username: "Tom",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // this  --> refereing the the current context.
    }
 
 
}
// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

 //console.log(this); // {} because here this is refering empty object. there is no context in global at this time.
 /*  Global object ==>  Window*/

// function chai(){
//     let username = "Udham"
//     console.log(this.username); // Undefined // unable to use this inside function, It works on objects.
// }

// chai()

// const chai = function () {
//     let username = Udham"
//     console.log(this.username); // undefined
// }
// chai()

// const chai =  () => { // remove function keywords and add an arrow after function parameters, this will create arroe function.
//     let username = "Udham"
//     console.log(this.username); // undefined
// }
// chai()


//  basic syntax for arrow function ...  () => {}. it can be hold inside a variable name. 

//(i) = basic or explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//(ii) = > implicit return
//const addTwo = (num1, num2) =>  num1 + num2   
//const addTwo = (num1, num2) => ( num1 + num2 ) // both are same.

 const addTwo = (num1, num2) => ({username: "udham"}) // for  return object we have to wrap it in parenthesis.
 
 //console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()