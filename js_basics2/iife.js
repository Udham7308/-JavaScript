// Immediately Invoked Function Expressions (IIFE)

// IIFE is used for removing the pollution(globally defined variables) of global decleration. 


//syntax for IIFE. ()()...> first parenthesis is for functions's defination and other one is for function's execution.
(function chai() {
    // Here iife is named iife because here function has a name.
    
    console.log(`DB connected`);

        // once iife invoked it don't know where to stop execution.
})();  // we have to use ; for stop the iife for the current context otherwise next context will not be able to run.

((name) => { // name ==> parameter
    //Here iife is simple iife because here function has not a name.

    console.log(`DB connected2 to ${name}`);

})('cloud') // cloud ==>  arrgument