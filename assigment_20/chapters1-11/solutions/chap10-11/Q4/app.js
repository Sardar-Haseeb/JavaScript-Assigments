   // Prompt the user to enter the remaining fuel in the car
   var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

   // Check if the remaining fuel is less than 0.25 liters and show a message
   if (!isNaN(remainingFuel) && remainingFuel < 0.25) {
       alert("Please refill the fuel in your car.");
   } else {
       alert("Your car has enough fuel. Drive safely!");
   }