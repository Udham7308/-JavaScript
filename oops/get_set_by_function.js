function User(email,passowrd){
    this._password = passowrd; // _password and _email are variables.
    this._email = email

    Object.defineProperty(this,'email',{ // here this is work as context,email as property at which we have to apply getters and setters.
        //and third one is out get and set functions.
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email = value
        }
    }) 
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password = value
        }
    }) 
}

const Udham = new User("udham@s.ai","12amn")
console.log(Udham.email);
console.log(Udham.password);