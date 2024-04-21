// Store your favorite snack into a variable
var favoriteSnack = "Chocolate Bars"; // Replace with your actual favorite snack

// Store your current age into a variable
var currentAge = 25; // Replace 25 with your actual current age

// Store a maximum age into a variable
var maxAge = 80; // Replace 80 with your estimated maximum age

// Store an estimated amount per day (as a number)
var amountPerDay = 2; // Replace 2 with your estimated amount per day

// Calculate how many you would eat total for the rest of your life
var yearsRemaining = maxAge - currentAge;
var totalAmountNeeded = yearsRemaining * 365 * amountPerDay;

// Display the result in the browser
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("<p>Your favorite snack: " + favoriteSnack + "</p>");
document.write("<p>Current age: " + currentAge + "</p>");
document.write("<p>Maximum age: " + maxAge + "</p>");
document.write("<p>Estimated amount per day: " + amountPerDay + "</p>");
document.write("<hr>");
document.write("<p>You will need " + totalAmountNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "</p>");