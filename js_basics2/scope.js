let a = 400
 var c =  300

if(true){  // scope ==> {}
    let a =10 //  'a' is declared but its value is never read
    const b=20 // 'b' is declared but its value is never read
      
    var c = 30
    //console.log("inner: ", a);
} //  values inside the scope should not come outside the scope.

//console.log(a); //  a is not decleared here.
//console.log(b);  // b is not decleared here.
//console.log(c); 

/* --> Global scope is different in browser console and in code enviroment by node. */


function one(){
    const username = "Udham"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
     //console.log(website);

     two() //execution ofcfunction two.
    
}
 
one() // execution of function one.


if (true) {
    const username = "Udham"
    if (username === "Udham") {
        const website = " youtube"
         //console.log(username + website);
    }
     // console.log(website); // ==> error
}

//console.log(username); // ==> error


// ++++++++++++++++++ interesting ++++++++++++++++++



//console.log(addone(5)) // ===> 6
function addone(num){
    return num + 1
}


// Hoisting  ==> execution context
//console.log(addTwo(5))   // ReferenceError: Cannot access 'addTwo' before initialization
 const addTwo = function(num){
     return num + 2
 }
