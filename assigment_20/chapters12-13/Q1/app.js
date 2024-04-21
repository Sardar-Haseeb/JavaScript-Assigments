function checkCharacter(char) {
    // Check if the input is a number
    if (!isNaN(parseInt(char))) {
        console.log(`The input '${char}' is a number.`);
    }
    // Check if the input is an uppercase letter
    else if (char >= 'A' && char <= 'Z') {
        console.log(`The input '${char}' is an uppercase letter.`);
    }
    // Check if the input is a lowercase letter
    else if (char >= 'a' && char <= 'z') {
        console.log(`The input '${char}' is a lowercase letter.`);
    } else {
        console.log(`The input '${char}' is not a number or a letter.`);
    }
}

// Input character
var inputChar = prompt("Enter a character:");

// Check the character type
checkCharacter(inputChar);
