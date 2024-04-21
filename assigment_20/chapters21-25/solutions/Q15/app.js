function isValidPassword(password) {
    // Check if password contains alphabets and numbers
    var containsAlphabets = /[a-zA-Z]/.test(password);
    var containsNumbers = /[0-9]/.test(password);
    
    // Check if password does not start with a number
    var startsWithNumber = /^[0-9]/.test(password);
    
    // Check if password is at least 6 characters long
    var isAtLeastSixCharsLong = password.length >= 6;
    
    return containsAlphabets && containsNumbers && !startsWithNumber && isAtLeastSixCharsLong;
}

var password = prompt("Enter your password:");

while (!isValidPassword(password)) {
    password = prompt("Please enter a valid password that meets the requirements:\n" +
                      "a. It should contain alphabets and numbers\n" +
                      "b. It should not start with a number\n" +
                      "c. It must be at least 6 characters long");
}

alert("Valid password! You may proceed.");
