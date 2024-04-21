// Prompt the user to enter the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Check the operation and perform the calculation
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    var result;

    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        // Check if the second number is not zero to avoid division by zero
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            alert("Error: Division by zero is not allowed.");
            result = "Undefined";
        }
    } else if (operation === '%') {
        result = firstNumber % secondNumber;
    } else {
        alert("Invalid operation. Please enter a valid operation.");
        result = "Invalid";
    }

    // Display the calculated result
    alert("Result: " + result);
} else {
    alert("Invalid input. Please enter valid numbers.");
}