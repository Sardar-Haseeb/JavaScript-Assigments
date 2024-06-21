function displayResult() {
    var correctAnsCount = localStorage.getItem("correctAnsCount");
    var wrongAnsCount = localStorage.getItem("wrongAnsCount");
    var totalQuestions = localStorage.getItem("totalQuestions");
    
    document.getElementById("correctAns").innerHTML = correctAnsCount;
    document.getElementById("wrongAns").innerHTML = wrongAnsCount;
    document.getElementById("attemptedAns").innerHTML = parseInt(correctAnsCount) + parseInt(wrongAnsCount);
    document.getElementById("totalQuestions").innerHTML = totalQuestions;
    var percentageScore = (correctAnsCount / totalQuestions) * 100;
    document.getElementById("percentage").innerHTML = percentageScore.toFixed(2);
}

window.onload = displayResult;
