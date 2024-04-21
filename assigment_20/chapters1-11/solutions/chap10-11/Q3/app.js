// Prompt the user to enter the color of the traffic signal
var signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");

// Check the signal color and show the appropriate message
if (signalColor) {
    signalColor = signalColor.toLowerCase(); // Convert to lowercase for case-insensitivity

    switch (signalColor) {
        case "red":
            alert("Must Stop");
            break;
        case "yellow":
            alert("Ready to move");
            break;
        case "green":
            alert("Move now");
            break;
        default:
            alert("Invalid signal color. Please enter Red, Yellow, or Green.");
    }
} else {
    alert("Invalid input. Please enter the color of the traffic signal.");
}