// singleton ==> Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.
// Object.create

// object literals ==> Itis a list of property names:values inside curly braces {}.

const mySym = Symbol("key1") // symbol used as key in object in [].

const JsUser = { // object keys are track as a string.
    name: "Udham",
    "full name": "UdhamSingh", // it can't be access by . method.
    [mySym]: "mykey1", // for access symbol we have to use [] in key as well as in output.
    age: 18,
    location: "Jaipur",
    email: "udham@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) 
// console.log(JsUser["full name"]) // some keys can't be accessed by . there we use []
// console.log(typeof JsUser[mySym]);// String



JsUser.email = "Udhamm@chatgpt.com"
// Object.freeze(JsUser) // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "Udham@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    //console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    //console.log(`Hello JS user,${this.name}`);
}

//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());


// const tinderUser = new Object() // ==> singleton object
const tinderUser = {}             // ==> non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Udham",
            lastname: "Singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); // Udham

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }

//const obj3 = Object.assign({}, obj1, obj2, obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//Copy the values of all of the enumerable own properties from one or more source objects to a target object.
// Returns the target object. we use an empty {} as a target object.otherwise it 

const obj3 = {...obj1, ...obj2} // Spread opreator
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "m@gmail.com"
    },
    {
        id: 3,
        email: "p@gmail.com"
    },
]

//console.log(users[1]) // { id: 2, email: 'm@gmail.com' }

//console.log(tinderUser);

//console.log(Object.keys(tinderUser)); // provides the keys of object.
//console.log(Object.values(tinderUser)); // provide the values of object.
//console.log(Object.entries(tinderUser)); // Returns an array of key/values of the enumerable properties of an object.

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Determines whether an object has a property with the specified name.




/* ===========> Objects destructuring and JSON API <============ */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//console.log(course["courseInstructor"]);
//const {courseInstructor} = course
//console.log(courseInstructor);

// we can restructure name according to us. as here i did courseInstructor:instructor. 
//for instructor i will get the value of courseInstructor key.

//const {courseInstructor:instructor} = course
//console.log(instructor);


 
// API formates (i) JSON Formate.(ii) Arrays
{ // JSON formate .--> {}. In it we have keys and values as strings.
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[ {}, {}, {} ]
