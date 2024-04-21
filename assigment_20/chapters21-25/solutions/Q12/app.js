var num = 35.36;
var numAsString = num.toString();
var numWithoutDot = numAsString.replace(".", "");

document.write("Original Number: " + num + "<br>");
document.write("Number as String: " + numAsString + "<br>");
document.write("Number without Dot: " + numWithoutDot);
