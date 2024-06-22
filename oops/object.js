function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2 // dot(.) with object
//console.log(multiplyBy5(5));
//console.log(multiplyBy5.power);
//console.log(multiplyBy5.prototype); // {} ==> technically function is also a object.
// ya {} --> there are some by default set context of prototype us method ka this hota hai.
function createUser(userName,score) {
    this.username = userName
    this.score = score

}
createUser.prototype.increment = function(){
    this.score++ // none of have context, for that we have to use this in our function.
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`); // this means jiska, score kiska jisne call kiya uska.
}
//const chai = createUser("chai",25) //  Cannot read properties of undefined (reading 'printMe') --> although function has the peoperties.
// const tea = createUser("tea",250)// But during the variable declearing we didn't tell that function had the properties. so we have to use new keyword.

const chai =new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe() // .prototype is working behind the scene

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

