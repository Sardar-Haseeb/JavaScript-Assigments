// Number for the multiplication table
var number = 5;

// Display the multiplication table for 5 in the browser
document.write("<h2>Multiplication Table for " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(number + " x " + i + " = " + result + "<br>");
}