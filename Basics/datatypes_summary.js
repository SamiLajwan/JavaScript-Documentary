// Primitives Data Types

// 7 Types: undefined, null, boolean, string, symbol, number, object

// let a = symbol('a')
// let b = symbol('a')

// console.log(a === b); //false

// //Reference Data Types(Non-Primitive Data Types)

// // 3 Types: Arrays, Functions, Objects
// //Arrays
// const heros = ["a", "b", "c"];

// //Objects
// let myObj = {
//     name: "sami",
//     age: 23,
// }

// //Functions
// const myFunction = function () {
//     console.log("Hello");
// }

// console.log(typeof myObj);


// *******************************************************

//Stack ==> (Primitive), Heap ==> (Reference)

 let myName = "sami";
 let myName2 = myName;

 myName2 = "sami2";

 console.log(myName); //sami

 console.log(myName2); // sami2

 let userOne  = {
    email: "sami.lajwan.com",
    upi: "12480.ybl",
 }

 let userTwo = userOne;

 userTwo.email = "sami2.lajwan.com";

 console.log(userOne.email); //sami2.lajwan.com
 console.log(userTwo.email); //sami2.lajwan.com