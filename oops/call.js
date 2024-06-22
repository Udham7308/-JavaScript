function setUserName(username){
    this.username = username
    console.log("called");
}

function CreateUser(username,email,password){
    // this.username = username 

   // setUserName(username)// here setUserName method is called,but on execution it lost the refernce of outer funtion. so we have to use .call() method for holding the reference.
   setUserName.call(this,username) // Here setUserName use the this of outer function for current context if it uses it's this then all the decleared things will be removed.

   this.email = email
    this.password = password
}

const chai = new CreateUser("Chai","chai@meta.com",1290)
console.log(chai);