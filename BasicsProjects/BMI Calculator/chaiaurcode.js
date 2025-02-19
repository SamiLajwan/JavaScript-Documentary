const form =  document.querySelector('form')
const resetButton = document.querySelector('#reset')
const results = document.querySelector('#results')
//this usecase will give you empty
//    const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    // const results = document.querySelector('#results')

    //<--- Height --->
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `PLease give a valid height ${height}`;
    }

    //<---weight--->
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `PLease give a valid weight ${weight}`;
    }

    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        let category = '';
        if(bmi < 18.5){
            console.log(category = 'Underweight.');
        } else if(bmi >= 18.5 && bmi <= 24.9){
            category = 'Normal Weight.'
        } else if(bmi >= 25 && bmi <= 29.9){
            category = 'OverWeight.'
        } else{
            category = 'Obesity !'
        }

        //show the result
        results.innerHTML = `<span>BMI:${bmi} - ${category}</span>`
    }

})

resetButton.addEventListener('click', function(){
    results.innerHTML = '';
})