// Store total marks and marks obtained by a student
var totalMarks = 1000; // Replace 500 with the actual total marks
var marksObtained = 800; // Replace 420 with the actual marks obtained

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<h2>Percentage Calculation</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");