var str = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";
var count = 0;

// Convert both the string and the word to lowercase for case-insensitive search
var lowerCaseStr = str.toLowerCase();
var lowerCaseWord = wordToSearch.toLowerCase();

// Split the string into words
var words = lowerCaseStr.split(" ");

// Iterate through each word and count occurrences of the wordToSearch
for (var i = 0; i < words.length; i++) {
    if (words[i] === lowerCaseWord) {
        count++;
    }
}

console.log("Number of occurrences of '" + wordToSearch + "': " + count);
