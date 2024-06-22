// let myName = "udham     "
// let myDrink = "chai"

//console.log(myName.length); // 10
//console.log(myName.trim().length); // 5
//console.log(myName.truelength); // we have to create a methode which work on all string

let myHeros = ["thoe","spiderman"]

let heroPower = {
    thor :"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.udham = function(){
    console.log(`udham is present in all objects`);
}
Array.prototype.heyudham = function(){
    console.log(`udham says hello`);
}


// myHeros.udham() // udham is present in all objects
// myHeros.heyudham() // udham says hello
// heroPower.udham() // udham is present in all objects
// heroPower.heyudham() // error because heroPower.heyudham is not a functiona at Object.

/* ---------> INHERITANCE <----------- */
//  As objects have not access of other's properties so we can link them with prototype 
//after that they will be able to access other's property. we can use of __proto__ (2(_) underscores)

const user = {
    userName :"naruto",
    email:"uzumaki@meta.com"

}
const teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport

}
teacher.__proto__ = user 

// Modern syntax
// .setPrototypeOf(o.proto)==>  Sets the prototype of a specified object o to object proto or null. Returns the object o.
//wher o — The object to change its prototype.
// where proto — The value of the new prototype or null.

Object.setPrototypeOf(TeachingSupport,teacher) 

let anotherUserName = "UdhamSingh     "
String.prototype.trueLength = function(){
    //console.log(`${this}`); // UdhamSingh ==> because inside of anotherUserName we have the reference of UdhamSingh.
    //console.log(`${this.name}`); // have not access
    console.log(`True length is :${this.trim().length}`);
}
anotherUserName.trueLength() // 10
"Hellooo     ".trueLength(); // 7
"        Delhi".trueLength(); // 5