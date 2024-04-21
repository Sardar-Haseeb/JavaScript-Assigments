// Initialize an array with color names
var colors = ["red", "green", "blue"];

// Display the array elements in the browser
document.write("<b>Initial Array:</b> " + colors.join(", ") + "<br>");

// a. Add color to the beginning of the array
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);
document.write("<b>After adding color at the beginning:</b> " + colors.join(", ") + "<br>");

// b. Add color to the end of the array
var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
document.write("<b>After adding color at the end:</b> " + colors.join(", ") + "<br>");

// c. Add two more colors to the beginning of the array
colors.unshift("yellow", "orange");
document.write("<b>After adding two more colors at the beginning:</b> " + colors.join(", ") + "<br>");

// d. Delete the first color in the array
colors.shift();
document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br>");

// e. Delete the last color in the array
colors.pop();
document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br>");

// f. Add color at a specific index
var indexToAddColor = parseInt(prompt("Enter the index where you want to add a color:"));
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAddColor, 0, colorToAdd);
document.write("<b>After adding color at index " + indexToAddColor + ":</b> " + colors.join(", ") + "<br>");

// g. Delete color(s) from a specific index
var indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<b>After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ":</b> " + colors.join(", ") + "<br>");
