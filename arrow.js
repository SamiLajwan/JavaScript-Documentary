const user = {
    username: "Sami",
    price: 999,

    welcomeMessage: function(){
    console.log(`${this.username}, Welcome to website`);  
    console.log(this);
      
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Sami"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {   //arrow function
    let username = "Sami"
    console.log(this);
    
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)  // implicit return mthod
// const addTwo = (num1, num2) => ({username: "sami"})  // implicit return mthod


// console.log(addTwo(3,4))



