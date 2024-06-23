class User{
    constructor(username){
        this.username = username
    }
    login(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        //this.username = username
        super(username) // super keyword refer karega ki konsi class ko extend kar rahe tha,
        // jis class ko kar rahe the uske ander constructor mai jata hu this ko bhi autometically set kar dunga,
        // waha username or username ki value ko set kar dunga fir aap uska apni class mai access la paouge.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Tenzo","chai@gmail.com","abc")
chai.addCourse();
chai.login();

const test = new User("Tobirama")
test.login()

console.log(chai===Teacher) // false
console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
