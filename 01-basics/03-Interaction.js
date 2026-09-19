// Interaction: alert, prompt, confirm

// 1. alert
alert("Hello"); // shows a message

// 2. prompt
let age = prompt("How old are you?", 100); // shows a message and waits for user input
// Stores the input value in the variable 'age'. If the user presses Cancel, 'age' will be null. If the user enters nothing, 'age' will be an empty string.

// 3. confirm
let isBoss = confirm("Are you the boss?"); // shows a message and waits for user confirmation
// Stores true if OK is pressed, otherwise false

// Practice

let userAge = Number(prompt("What is your age?",100));
if(!Number.isNaN(userAge) && userAge >0 ){
    alert(`You are ${userAge} years old.`)
}else{
    alert("Enter a valid number");
}
let ispass = confirm("Do you want to continue?");
if (ispass === true){
    alert("You chose to continue.");
} else{
    alert("You cancelled the operation.");
}