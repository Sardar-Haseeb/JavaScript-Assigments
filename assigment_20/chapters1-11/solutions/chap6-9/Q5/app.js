var userInput = prompt("Enter a number for the multiplication table:");

    // Convert the input to a number, or use 5 as the default
    var number = userInput ? parseFloat(userInput) : 5;

    // Display the multiplication table in the browser
    document.write("<h2>Multiplication Table for " + number + "</h2>");

    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        document.write(number + " x " + i + " = " + result + "<br>");
    }