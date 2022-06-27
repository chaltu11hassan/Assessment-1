// Create a variable called password and set its value to a string of your choice.
// Write a conditional statement that checks if the password meets the following constraints: 
// At least 10 characters long
// Contains at least one letter and one number
// If the password meets the constraint, console log a success message.
// If the password fails the constraint, console log a failure message.
// Test out your conditional by changing the value of your password variable and running your file!

let password = 'chaltu12thassan';

// let password = 'Definatelyfail';

let isLett = /[0-9]/.test(password);  
let isNum = /[a-zA-z]/.test(password); 

let isSpecial = /!@#$%^&/.test(password); // this is an additional check
let isSpaces = /\s/.test(password); //this is an additional check
let length = password.length;

if (password.length >= 10 && isLett === true && isNum === true){
    console.log('Success!');
} else if (password.length <10 && isSpaces === true){
    console.log('Fail!');
}

if (isSpecial === true){
    console.log('Special characters found')
} else if( isSpecial !== true){
        console.log('No special characters found')
}
