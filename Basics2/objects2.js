// object using contructor
const tinderUser = new Object()

// console.log(tinderUser);

tinderUser.id = "abc"
tinderUser.name = "sami"
tinderUser.isloggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userFullname: {
            firstname: "abdul",
            middlename: "sami"
        }
    }
}
  
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} // not a good method
// const obj3 = Object.assign({}, obj1, obj2) // merges two object perfectlyy
const obj3 = {...obj1, ...obj2} // best syntax
// console.log(obj3);

const users = [
    {
    id: 1,
    email: "h@gmail.com"
    },
    {

    },

]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // keys in arrays
console.log(Object.values(tinderUser)); // values in array
console.log(Object.entries(tinderUser)); // entries in array

console.log(tinderUser.hasOwnProperty('isloggedin')); // ans in boolean 




