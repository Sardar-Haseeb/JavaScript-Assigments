// Ask the user about their weight
var userInput = prompt("Please enter your weight:");

// Parse the user input to extract the weight
var weight = parseFloat(userInput);

// Display the weight in the browser
document.write("<h2>Weight:</h2>");
document.write("<p>Your weight is: " + weight + " kgs</p>");