// Prompt the user to enter their gender
var userGender = prompt("Enter your gender (Male/Female):");

// Check the user's gender and give a personalized greeting
if (userGender) {
    userGender = userGender.toLowerCase(); // Convert to lowercase for case-insensitivity

    if (userGender === "male") {
        alert("Good Morning Sir!");
    } else if (userGender === "female") {
        alert("Good Morning Ma'am!");
    } else {
        alert("Sorry, gender not recognized. Please enter Male or Female.");
    }
} else {
    alert("Invalid input. Please enter your gender.");
}