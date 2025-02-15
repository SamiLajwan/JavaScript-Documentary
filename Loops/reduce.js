const myNums  = [1,2,3]

// const initialvalue = 0;
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currVal: ${currval}`);
    
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)


// console.log(myTotal) 

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "python",
        price: 999
    },
    {
        itemname: "data science course",
        price: 12999
    },
    {
        itemname: "mobile app course",
        price: 3999
    },
]

const pricetoPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(pricetoPay);
