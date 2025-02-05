const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["flash", "superman", "batman"]

// marvel_heroes.push(dc_heroes) // array ke andar array ajyga

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); // return a specific item

// const allHeroes = marvel_heroes.concat(dc_heroes); // two array are merged properly now with concat method.
// console.log(allHeroes);

//easy operation than concat-->
const all_newHeroes = [...marvel_heroes, ...dc_heroes] // ... lagane se har elemnt spread hogya hh
//  console.log(all_newHeroes);

// const anotherArray = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
// const real_another_array = anotherArray.flat(Infinity) // spread out all concatinated array elemnt
// console.log(real_another_array);


// console.log(Array.isArray("sami")); // false
// console.log(Array.from("sami")); // array ke form me bna dega
// console.log(Array.from({name: "sami"}));  
// Array.from({name: "sami"}) will not produce a meaningful array. 
// Array.from expects an array-like or iterable object. 
// This will result in an array with undefined values. 
// If you want to convert an object to an array, 
// you might want to use Object.values or Object.entries instead.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]




 