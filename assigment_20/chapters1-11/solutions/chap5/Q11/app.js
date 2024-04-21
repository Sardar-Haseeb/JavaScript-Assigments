 // Store the current year in a variable
 var currentYear = new Date().getFullYear();

 // Store their birth year in a variable
 var birthYear = 2001; // Replace 1990 with the actual birth year

 // Calculate their 2 possible ages based on the stored values
 var age1 = currentYear - birthYear;
 var age2 = age1 - 1;

 // Display the result in the browser
 document.write("<h2>Age Calculator</h2>");
 document.write("<p>Current Year: " + currentYear + "</p>");
 document.write("<p>Birth Year: " + birthYear + "</p>");
 document.write("<hr>");
 document.write("<p>They are either " + age1 + " or " + age2 + " years old</p>");