function compareIntegers(num1, num2) {
    if (num1 === num2) {
        console.log("The two integers are equal.");
    } else if (num1 > num2) {
        console.log(`The larger integer is: ${num1}`);
    } else {
        console.log(`The larger integer is: ${num2}`);
    }
}

// Accept two integers from the user
var int1 = parseInt(prompt("Enter the first integer:"));
var int2 = parseInt(prompt("Enter the second integer:"));

// Display the larger integer and check if they are equal
compareIntegers(int1, int2);
