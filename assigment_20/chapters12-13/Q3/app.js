function checkNumber(number) {
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Accept a number from the user
var userInput = parseFloat(prompt("Enter a number:"));

// Check whether the number is positive, negative, or zero
checkNumber(userInput);
