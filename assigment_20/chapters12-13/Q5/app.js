// Step a: Store correct password in a variable
var correctPassword = "password123";

// Step b: Ask user to enter password
var userPassword = prompt("Enter your password:");

// Step c: Validate the two passwords
if (userPassword === "") {
    // Step c.i: Check if user has entered password
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    // Step c.ii: Check if passwords match
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}
