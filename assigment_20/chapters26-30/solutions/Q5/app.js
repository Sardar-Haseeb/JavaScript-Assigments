// Generate a random number (either 0 or 1) to simulate a coin toss
var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";

// Display the value of the coin in the browser
document.write("<h2>Coin Toss Simulation</h2>");
document.write("<p>The value of the coin is: " + coinValue + "</p>");