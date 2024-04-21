function isVowel(character) {
    // Convert the character to lowercase to handle both cases
    var char = character.toLowerCase();

    // Check if the character is a vowel
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

// Accept a character from the user
var userInput = prompt("Enter a character:");

// Check if the character is a vowel and display the result
console.log(`Is '${userInput}' a vowel? ${isVowel(userInput)}`);
