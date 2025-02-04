//Dates

let myDate = new Date()
// console.log(myDate.toString()); //Wed Jun 09 2021 12:00:00 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); //Wed Jun 09 2021

// console.log(myDate.toTimeString()); //12:00:00 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString()); //6/9/2021, 12:00:00 PM

// console.log(typeof myDate); //date is a object in JS

// let myCreatedDate = new Date(2023, 0, 23, 13, 3, 52) // specific date we want
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 1:03:52 PM

let myCreatedDate = new Date("2023-01-14") // DD/YY/MM format
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //1623191400000
// console.log(myCreatedDate.getTime());  //1679001600000   
// console.log(Math.floor(Date.now()/1000));  //in seconds

let newDate = new Date()
console.log(newDate); //Wed Jun 09 2021 12:00:00 GMT+0530 (India Standard Time)

// console.log(newDate.getMonth() + 1); //5

// console.log(newDate.getDay());  //3

// console.log(`${newDate.getDate()} and the time` )

console.log(newDate.toLocaleString('default', { // wednesday
    weekday: "long"
}))
