// Prompt the user to enter the temperature
var temperature = parseFloat(prompt("Enter the temperature in degrees Celsius:"));

// Check the temperature and display a message based on the criteria
if (!isNaN(temperature)) {
    if (temperature > 40) {
        alert("It is too hot outside.");
    } else if (temperature > 30) {
        alert("The Weather today is Normal.");
    } else if (temperature > 20) {
        alert("Today’s Weather is cool.");
    } else if (temperature > 10) {
        alert("OMG! Today’s weather is so Cool.");
    } else {
        alert("It's extremely cold outside.");
    }
} else {
    alert("Invalid input. Please enter a valid temperature.");
}