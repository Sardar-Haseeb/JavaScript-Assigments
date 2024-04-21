var A = ["cake", "apple pie", "cookie", "chips", "patties"];

while (true) {
    var userInput = prompt("Enter the item you want to search (or 'quit' to exit): ").toLowerCase();
    if (userInput === 'quit') {
        console.log("Exiting program...");
        break;
    } else {
        var found = false;
        for (var i = 0; i < A.length; i++) {
            if (A[i] === userInput) {
                found = true;
                break;
            }
        }
        if (found) {
            console.log(`'${userInput}' is found in the list.`);
        } else {
            console.log(`'${userInput}' is not found in the list.`);
        }
    }
}
