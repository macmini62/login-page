//validates if the email entered is an email address...not complete!!
const emailInput = querySelector();
function emailValidator(emailInput){
    const emailPattern = /^[a-z0-9]+(?=@gmail.com)/;
    const isValidEmail = emailPattern.match(emailInput.value);

    if (isValidEmail === false){
        return error = ('Looks like this is not a valid email address');
    }
}

function nameValidator(firstName, lastName){
    if(firstName.length === 0){
        return errorName = ('First name cannot be empty');
    }else if(lastName.length === 0){
        return errorName = ('Last name cannot be empty');
    }

}

function passwordValidator(password){
    if(password.length === 0){
        return errorPassword = ('Please enter your password')
    }
}

//creates a new paragraph of the errors from the input fields

