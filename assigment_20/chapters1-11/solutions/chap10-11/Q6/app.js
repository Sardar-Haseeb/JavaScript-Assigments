  // Prompt the user to enter marks obtained in three subjects and total marks
  var marksSubject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
  var marksSubject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
  var marksSubject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
  var totalMarks = parseFloat(prompt("Enter total marks:"));

  // Calculate total marks obtained and percentage
  var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
  var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

  // Determine the grade and remarks based on the percentage
  var grade, remarks;

  if (percentage >= 80) {
      grade = "A-one";
      remarks = "Excellent";
  } else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
  } else if (percentage >= 60) {
      grade = "B";
      remarks = "You need to improve";
  } else {
      grade = "Fail";
      remarks = "Sorry";
  }

  // Display the results on the page
  document.write("<h2>Result:</h2>");
  document.write("<p>Total marks: " + (3 * totalMarks) + "</p>");
  document.write("<p>Marks obtained: " + totalObtainedMarks + "</p>");
  document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
  document.write("<p>Grade: " + grade + "</p>");
  document.write("<p>Remarks: " + remarks + "</p>");