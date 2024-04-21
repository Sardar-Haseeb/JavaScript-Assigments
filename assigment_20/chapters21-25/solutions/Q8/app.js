var message = "Ali and Sami are best friends. They play cricket and football together.";
var replacedMessage = message.split("and").join("&");
document.write("Original Message: " + message + "<br>");
document.write("After Replacement: " + replacedMessage);