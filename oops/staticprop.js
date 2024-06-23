class User{
    constructor(username){
        this.username = username
    }

    login(){
        console.log(`username: ${this.username}`);
    }
    static createId(){ // prevent the access || Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
        return console.log(`123`); 
    }
}

const udham = new User("UdhamSingh")
//udham.createId()

class Teacher extends User{
    constructor(username,email){
       super(username)
       this.email = email
    }
}

const MM = new Teacher("mahamanav","mm@fb.com")
console.log(MM.username);
MM.login()
MM.createId()
