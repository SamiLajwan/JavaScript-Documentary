//defination

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("I");   
}
//sayMyName()


function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result:", result)

function loginUserMessage(username="sami"){  // parametr me value dedi. toh undefined nhi ayga.
    if(username === undefined){   // or (!username)
        console.log("PLease enter a username");
        return    // ek bar return krne ke baad next return nhi krega.
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("sami"))
//  console.log(loginUserMessage()) // empty arguments me undefined aata hain

function calculateCartPrice(val1, val2, ...num1) { // val1->200, or val2->400 hojygi
    return num1                                    // or num ke correspond hi vlaue return hogi
}

// console.log(calculateCartPrice(200,400,500));

const user= {
    username: "sami",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user) 
//or
handleObject({
    username: "sami",
    price: 299
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray
}
// console.log(returnSecondValue(myNewArray[2]));

