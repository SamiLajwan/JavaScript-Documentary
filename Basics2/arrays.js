// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["hello", "sami"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[3]);

//Array Method

// myArr.push() //used to insert elemnt in array
// myArr.pop() // to delete

// myArr.unshift(9)  // insert 9 at front 
// myArr.shift()     // delete at front


// console.log(myArr.includes(9)); 
// console.log(myArr.indexOf(9)); 

// const newArr = myArr.join() // join the array in specific datatype
// console.log(myArr)
// console.log(newArr);

//slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)  // 1 index se 3rd tk ki values milegi

// console.log(myn1);
// console.log("B", myArr);

console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // 3 indicates the number of elem to removed between
console.log("c", myArr);
console.log(myn2);




