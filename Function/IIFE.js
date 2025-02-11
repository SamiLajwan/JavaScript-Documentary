// IIFE- Immediately Invoked Function Expression

// to avoid the pollution of global scope
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();  // semi colon is used to end the IIFE func


( (name) =>  {
    console.log(`DB CONNECTED TO. ${name}`);
    
}) ("SAMI")
