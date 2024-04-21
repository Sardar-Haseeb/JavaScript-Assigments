// Prompt the user to enter the time in 24-hour format
var timeInput = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));

// Implementing different cases using if, else if, and else statements
if (timeInput >= 0 && timeInput < 1200) {
    console.log("Good morning!");
} else if (timeInput >= 1200 && timeInput < 1700) {
    console.log("Good afternoon!");
} else if (timeInput >= 1700 && timeInput < 2000) {
    console.log("Good evening!");
} else if (timeInput >= 2000 && timeInput < 2400) {
    console.log("Good night!");
} else {
    console.log("Invalid time input.");
}
