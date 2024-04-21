var username = prompt("Enter your username:");

// Function to check if username contains any special symbol
function isValidUsername(username) {
    for (var i = 0; i < username.length; i++) {
        var charCode = username.charCodeAt(i);
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            return false;
        }
    }
    return true;
}

// Check if the username is valid
while (!isValidUsername(username)) {
    username = prompt("Enter a valid username without special symbols ([@, ., !, ,]):");
}

alert("Welcome, " + username + "!");
