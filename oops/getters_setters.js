class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    // there are by default getters and setters for class properties.

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this.passwordkey.toUpperCase()
        //return `${this.passwordkey}Hello`
    }
   
    set password(value){
        this.passwordkey = value
       
    }
    /* Constructor also try to set value and after it we also introduce getters and setters dur to that all things are messed up */
    // due to that Maximum call stack size exceeded.
    //to solve it we have to change our property name in getters and setters methods.
   


}
const Udham = new User("udham@s.ai","12amn")
console.log(Udham.email);
console.log(Udham.password);

