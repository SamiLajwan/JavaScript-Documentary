//basic
const coding = ['js', 'ruby', 'java', 'python']
coding.forEach( function(item) {
    // console.log(item);
    
} )

coding.forEach( (value) => {
    // console.log(value); 
} )

function printMe(item){
    // console.log(item);
    
}
coding.forEach(printMe)

coding.forEach((item, index, Array) => {
    // console.log(item, index, Array);
    
})

const myCoding = [{
    languageName: 'Javascript',
    languageFileName: 'Js'
    },
    {
    languageName: 'CPP',
    languageFileName: 'C++'
    },
    {
    languageName: 'Python',
    languageFileName: 'py'
    }
]
myCoding.forEach((item)=>{


    console.log(item.languageName);
    
})