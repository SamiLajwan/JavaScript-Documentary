// forloops

for (let i = 1; i <= 10; i++) {
    const element = i; 
    if(element == 5){
        // console.log("5 is best.");
        
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    
   for (let j = 1 ; j <= 10; j++) {
        // console.log(`Inner Loop value: ${j}`);
        // console.log(i + '*' + j + ' = ' + i*j );
        
   }
    
}


// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`${index} is detected`);
//         break;
//     }console.log(`Value of i is ${index}`);
    

// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`${index} is detected`);
        continue;
    }console.log(`Value of i is ${index}`);
    

}