let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input')
    inputEmail = document.querySelector('.js-input-email'),
    inputPass1 = document.querySelector('.js-input-passwd1'),
    inputPass2 = document.querySelector('.js-input-passwd2'),
    inputGender = document.querySelector('.js-input-gender');
    

function validateEmail(email){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.onsubmit = function(){
    let emailVal = inputEmail.value;

    emptyInputs = Array.from(formInputs).filter(input => input.value === '');
    let pass1 = inputPass1.value;
    let pass2 = inputPass2.value;

    formInputs.forEach(function(input){
        if (input.value === ''){
            input.classList.add('error');
      
        } else{
            input.classList.remove('error');
        }
    })

    if (!validateEmail(emailVal)){
        console.log('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else{
        inputEmail.classList.remove('error');
    }

    if (emptyInputs.length !== 0){
        console.log('inputs not filled');
        return false;
    } 

    if (pass1 !== pass2){
        console.log('Passwords do not match');
        inputPass1.classList.add('error');
        inputPass2.classList.add('error');
        alert("Пароли не совпадают!");
        return false;
    } else{
        inputPass1.classList.remove('error');
        inputPass2.classList.remove('error');
    }

    if(!inputGender.checked) {
        console.log('gender not checked');
        inputGender.classList.add('error');
        alert("Выберете пол!");
        return false;
    } else {
        inputGender.classList.remove('error')
    }

}