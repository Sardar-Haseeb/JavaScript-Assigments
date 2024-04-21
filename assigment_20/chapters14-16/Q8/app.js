// Array to store student names
var studentNames = ["John", "Alice", "Bob"];

// Array to store scores of the students
var scores = [420, 380, 450]; // Scores out of 500 for each student

// Calculate percentages for each student
var percentages = [];
for (var i = 0; i < scores.length; i++) {
    var percentage = (scores[i] / 500) * 100;
    percentages.push(percentage);
}

// Display scores and percentages of students
for (var i = 0; i < studentNames.length; i++) {
    console.log(`${studentNames[i]} scored ${scores[i]} out of 500, which is ${percentages[i]}%`);
}
