// var c =200     // value of global
// let a = 200
// if(true){    // value of scope
    // let a = 10
    // const b = 20 // value should not go outside scope
    // var c = 30
    // console.log("Inner->",a);
    
// }
// console.log(a);

function one() {
    const userName = "Sami"

    function two(){
        const website = "youtube"
        console.log(userName);
        
    }
    // console.log(website);
    
    // two()
}

// one()

if (true) {
    const username = "sami"
    if (username === "sami") {
        const website = " & Youtube"
        // console.log(username+website);
        
    }
    // console.log(website); // out of scope
    
}
// console.log(username) // out of scope


// ++++++++++++++++++ Intresting ++++++++++++++++//


console.log(addone(5))
function addone(num){
    return num + 1 // functions technique 1
}

// console.log(addTwo(5))// cannot access before initialization
const addTwo = function(num){   // functions technique 2
    return num + 2
}