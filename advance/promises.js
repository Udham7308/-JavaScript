const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,cryptography,network
   
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()// connected resolve and .then for getting the correct result.
    }, 1000); //After completion of console.log('Async task is complete) resolve will work
            // and then afte it promise comsumed part will be complete.
})  // A callback used to initialize the promise.
promiseOne.then(function(){
    console.log("Promise consumed");
}) // .then() directly connected to resolve

//Direct syntax for making promoise.
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
        console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,rejrect){
    setTimeout(function(){
        resolve({username:"Udham",email:"udham@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user); // as .then() connected to resolve so all the data given to resolve we will get it through .then()
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Udham",password:"3490"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
}) // .catch()==> The callback to execute when the Promise is rejected.Attaches a callback for only the rejection of the Promise.

const username = promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((name)=>{
    console.log(name);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Javascript",password:"3490"})
        }else{
            reject('ERROR: Event went wrong')
        }
    },1000)
})

// async function consumedPromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }

// consumedPromiseFive()
// output = error //  This error originated either by throwing inside of an async function without a catch block

async function consumedPromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        //console.log(error);
    }
}
consumedPromiseFive()

// async function getalluser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    console.log(response);
//     const data = await response.json() // take time so we have to use await here
//    console.log(data);
//    } catch (error) {
//     console.log("E:",error);
//    }
// }
// getalluser()

fetch('https://api.github.com/users/udham7308')
.then((response)=>{
    return response.json()
})
.then((data)=>{ // this .then used for handel the upper .then
    console.log(data);
})
.catch((error)=>console.log(error))

/* the global fetch() method starts the process of fetching a resourse from the network,returning a promise which is fulfilled once the response is available.
It is a more powerful and flexible replacement for XMLHttpRequest.
The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request.
A fetch() only rejects when a network error is encountered(which is usually when there's a permission issue or similar).
A fetch() promise does not reject on HTTP errors(404,etc these all are responses). instead , a then() handler must check the Response.ok and/or Response.status properties.

 */

