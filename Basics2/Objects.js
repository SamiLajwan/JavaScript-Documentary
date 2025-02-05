//singleton 

//object literals

//symbol declarationn in Object

let mySym = Symbol("key1")

const JsUser = {
    name: "Sami",
    'full name': 'Abdul Sami Lajwan',
    age: 18,
    [mySym]: "myKey1", // square brackets indicates it is a Object symbol
    location: "jaipur",
    email: "sami@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//how to access
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sami3121@gmail.com"

// Object.freeze(JsUser)
// 
JsUser.email = "smr@chatgpt.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS User");
}
console.log(JsUser.greeting());
console.log(JsUser.greeting); // function ka refernce aaya hh

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this. name}`);  
    
}
console.log(JsUser.greetingTwo());


