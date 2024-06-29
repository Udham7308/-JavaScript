const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
// this usecase will give you empty

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value) // convert string to int
    const weight = parseInt(document.querySelector('#weight').value) // convert string to int
    const result = document.querySelector('#result') // convert string to int

    if(height === " " || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height} `
    }else if(weight === " " || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid height ${weight}`
    }else{
        const bmi = (weight/((height*height)/1000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }

    if(bmi < 18.6){
        advice.innerHTML = console.log(`You are underweight. Please consult to doctor.`);
    }else if(18.6 < bmi < 24.9){
        advice.innerHTM = console.log(`Good! you have a normal BMI. Stay healthy.`);
    }else{
        advice.innerHTM = console.log(`Actually You are overweight. You have to think about it.`);
    }    
})