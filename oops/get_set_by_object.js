const User = {
    _email:"udham@gmail.com",
    _password:"abc",
    // we used _property as private property.

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
// getters and setters are special methods which are kept above the property

// factory function --> Object.create and more

const tea = Object.create(User)// based on User create an object and refers it to tea.
console.log(tea._email);// udham@gmail.com
console.log(tea.email);//UDHAM@GMAIL.COM

