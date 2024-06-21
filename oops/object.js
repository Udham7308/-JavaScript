function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2 // dot(.) with object
console.log(multiplyBy5(5));
//console.log(multiplyBy5.power);
//console.log(multiplyBy5.prototype); // {} ==> technically function is also a object.
// ya {} --> there are some by default set context of prototype us method ka this hota hai.
function createUser(userName,score) {
    this.username = userName

}