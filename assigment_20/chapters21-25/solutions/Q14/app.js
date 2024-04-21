var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to perform case-insensitive search in the array
function searchItem(array, item) {
    item = item.toLowerCase(); // Convert item to lowercase for case-insensitive search
    for (var i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === item) {
            return true;
        }
    }
    return false;
}

while (true) {
    var userInput = prompt("Enter the item you want to search (or 'quit' to exit):").toLowerCase();
    if (userInput === 'quit') {
        alert("Exiting program...");
        break;
    } else {
        if (searchItem(A, userInput)) {
            alert("'" + userInput + "' is found in the list.");
        } else {
            alert("'" + userInput + "' is not found in the list.");
        }
    }
}
