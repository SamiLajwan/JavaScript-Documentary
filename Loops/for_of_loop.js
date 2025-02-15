//for of
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

//maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "Ameria")
map.set('fr', "France")
map.set('UAE', "Dubai")

// console.log(map);

for (const [keys,Value] of map) {
    // console.log(keys, '->', Value);
    
}

const myObject = {  //Objects are not iteratable in for-of
    'game1': 'NFS',
    'game2': 'spiderman'
}

for (const [key,value] of myObject){
    // console.log(myObject);
}



  