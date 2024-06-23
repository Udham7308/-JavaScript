// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descriptor) // {    //     value: 3.141592653589793,
                                //     writable: false,
                                //     enumerable: false,
                                //     configurable: false
                                //   }

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // could not override.


// const myObject = Object.create(null)
// console.log(myObject);

const chai = {
    name: 'ginger chai',
    price:250,
    isAvailable:true,
    orderChai: function(){
        console.log("code is not well");
    }
}
// console.log(chai);
// console.log( Object.getOwnPropertyDescriptor(chai)); // undefined --> because chai here is a object not a property.
//console.log( Object.getOwnPropertyDescriptor(chai,"name")) // output -->

/* {
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
} */

// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false
// })

//console.log( Object.getOwnPropertyDescriptor(chai,"name")) // output -->
/* {
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
} */

//   for (let [key,value] of chai) {
//         console.log(`${key},${value}`); // error --> chai is not iterable, for iteration we have to use Object.entries(object name) 
// }

// for (let [key,value] of Object.entries(chai)) {
//     if(typeof value !== 'function'){
//         console.log(`${key},${value}`); // name,ginger chai
//                                         //price,250
//                                         //isAvailable,true
//     }
    
// } 

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key},${value}`);
    }//price,250
    //isAvailable,true
    // enumerable(iteration) is false due to that name is not iterable.
    //as enumerable will be true name will be shown as output.
}
