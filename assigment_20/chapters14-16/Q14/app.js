// Initialize an empty array to act as a stack
var stack = [];

// Add values one by one
stack.push("Value 1");
stack.push("Value 2");
stack.push("Value 3");

// Access the values in reverse order (LIFO)
console.log("Third value:", stack.pop()); // Remove and get the last value
console.log("Second value:", stack.pop()); // Remove and get the second last value
console.log("First value:", stack.pop()); // Remove and get the first value
