// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number between 1 and 10
var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user input equals the secret number
if (userInput === secretNumber) {
    alert("Congratulations! You guessed the secret number!");
} else {
    alert("Sorry, the secret number was " + secretNumber + ". Try again!");
}