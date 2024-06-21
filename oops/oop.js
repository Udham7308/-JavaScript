const user = {
    username : "udham",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        //console.log("Get user details from database");
        //return "Get user details from database"
        //console.log(`Username: ${username}`); // ==> username is not defined
        //console.log(`Username:${this.username}`); // ==> Username:udham
        console.log(this);  // ==> {
                                //     username: 'udham',
                                //     loginCount: 8,
                                //     signedIn: true,
                                //     getUserDetails: [Function: getUserDetails]
                                //   }

    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this); // ==>  {} -->  current context || this provide/referes the current context of an object.


//const promiseOne = new Promise() // new --> constructer function || create a new context.

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    //return this --> implicitly written so no need to write it.
}
// const userOne = User("udham",12,true)
// const userTwo = User("Singh",10,true)
//console.log(loginCount); // 12
//console.log(userOne); // value of usertwo will be override. to avoid it we need a new instance for every variable.
// so we use new keyword for new instances.

const userOne = new User("udham",12,true)
const userTwo = new User("Singh",10,true)
console.log(userOne);
console.log(userTwo);

/* step 1.As we use new keyword a new empty object creates called as instance.
step 2. Due to new keyword constructor functions call and provide all arguments.
step 3. all arguments injects inside this keyword.
step 4.  then we get the arguments in our function.
*/