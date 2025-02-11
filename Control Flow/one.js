//Contol Flow

//if
if(true){
    //true -> execution 
}

if(false){
    //false -> no execution
}

const temp = 50

if(temp > 1){
    // console.log("yes");
    
}

const score = 200
if(score > 100){
    const power = "Fly"
    // console.log(`User Power: ${power}`);
}

// console.log(`User power: ${power}`) // out of scope -> throws error

// const balance = 1000
// // if(balance>500) console.log("test"); //Implicit scope

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if(balance < 750){
//     console.log("less than 750");
    
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");  
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedFromEmail = true

if(userLoggedIn && debitCard){
    // console.log("Allow to buy Course");
}

if (loggedInFromGoogle || loggedFromEmail) {
    // console.log("User logged in.");
    
}

// const month = 3
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("DEFAULT Case Match");
//         break;
// }

// Truthy and Falsy Value
//Falsy -> false, 
// 0, -0, BigInt, 0n, "", null, undefined, NaN

//Truthy -> true,
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    // console.log('object is Empty');  // to check if the object is empty
}

 // Nullish Coalesching Operator(??): null , undefined

 let val1;
//  val1 = 5 ?? 10
//  val1 = null ?? 10 //-> 10
// val1 = undefined ?? 15 //-> 15
val1 = null ?? undefined ?? 20 // ->20
//  console.log(val1);

// Terniary Operator

// condition ? true: false

const icedTea = 100
icedTea >=80 ? console.log("more than 80") : console.log("less than 80");



 