// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

//to avoid pollution by  global scope IIFE is used means function is invoked immediately 
//You can use a semicolon before an IIFE for safety, especially when you're concatenating 
// multiple JavaScript files together.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')