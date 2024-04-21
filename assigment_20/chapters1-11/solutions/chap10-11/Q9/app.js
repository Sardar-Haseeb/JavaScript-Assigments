   // Prompt the user to enter a number
   var userNumber = parseInt(prompt("Enter a number:"));

   // Check if the number is even or odd
   if (!isNaN(userNumber)) {
       if (userNumber % 2 === 0) {
           alert("The number " + userNumber + " is even.");
       } else {
           alert("The number " + userNumber + " is odd.");
       }
   } else {
       alert("Invalid input. Please enter a valid number.");
   }