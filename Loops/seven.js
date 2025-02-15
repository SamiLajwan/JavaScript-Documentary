const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => {return num + 10} 
const newNums = myNumbers
                .map( (num) => num * 10 )      //this is called chaining
                .map( (num) => num + 1 )
                .filter( (num) => num >= 41 )
console.log(newNums);
