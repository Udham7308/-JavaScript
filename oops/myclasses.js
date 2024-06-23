// class User{
//     //constructor() -->as we use new keyword(initialize an object from class) constructor called itself.
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const naruto = new User("Naruto","uzumaki@leaf.com","2390")

//  console.log(naruto.encryptPassword());
//  console.log(naruto.changeUsername());

// Behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}flash`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
const minato = new User("Minato","uzumaki@leaf.com","theyellow")

 console.log(minato.encryptPassword())
 console.log(minato.changeUserName())

