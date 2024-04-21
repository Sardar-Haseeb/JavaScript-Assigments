// Initialize an empty array to act as a queue
var queue = [];

// Add values one by one
queue.push("Value 1");
queue.push("Value 2");
queue.push("Value 3");

// Access the values in the order they were stored (FIFO)
console.log("First value:", queue.shift()); // Remove and get the first value
console.log("Second value:", queue.shift()); // Remove and get the second value
console.log("Third value:", queue.shift()); // Remove and get the third value
