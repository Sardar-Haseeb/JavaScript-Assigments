
var questions = [
    {
        id: 1,
        question: "Who was the first Governor-General of Pakistan?",
        options: {
            a: "Liaquat Ali Khan",
            b: "Muhammad Ali Jinnah",
            c: "Ayub Khan",
            d: "Iskander Mirza",
        },
        answer: "Muhammad Ali Jinnah"
    },
    {
        id: 2,
        question: "In which year did Pakistan become an Islamic Republic?",
        options: {
            a: "1947",
            b: "1956",
            c: "1962",
            d: "1973",
        },
        answer: "1956"
    },
    {
        id: 3,
        question: "What is the national language of Pakistan?",
        options: {
            a: "English",
            b: "Punjabi",
            c: "Sindhi",
            d: "Urdu",
        },
        answer: "Urdu"
    },
    {
        id: 4,
        question: "Which city is known as the 'City of Lights' in Pakistan?",
        options: {
            a: "Lahore",
            b: "Islamabad",
            c: "Karachi",
            d: "Peshawar",
        },
        answer: "Karachi"
    },
    {
        id: 5,
        question: "Who was the first female Prime Minister of Pakistan?",
        options: {
            a: "Fatima Jinnah",
            b: "Benazir Bhutto",
            c: "Hina Rabbani Khar",
            d: "Asma Jahangir",
        },
        answer: "Benazir Bhutto"
    },
    {
        id: 6,
        question: "The Lahore Resolution, which led to the creation of Pakistan, was passed in which year?",
        options: {
            a: "1930",
            b: "1940",
            c: "1946",
            d: "1947",
        },
        answer: "1940"
    },
    {
        id: 7,
        question: "Which Pakistani physicist won the Nobel Prize in Physics in 1979?",
        options: {
            a: "Abdul Qadeer Khan",
            b: "Abdus Salam",
            c: "Samar Mubarakmand",
            d: "Pervez Hoodbhoy",
        },
        answer: "Abdus Salam"
    },
    {
        id: 8,
        question: "Who was the founder of the All India Muslim League?",
        options: {
            a: "Muhammad Ali Jinnah",
            b: "Sir Syed Ahmed Khan",
            c: "Allama Iqbal",
            d: "Nawab Salimullah Khan",
        },
        answer: "Nawab Salimullah Khan"
    },
    {
        id: 9,
        question: "Which movement was led by Khilafat leaders Maulana Muhammad Ali and Shaukat Ali?",
        options: {
            a: "Pakistan Movement",
            b: "Khilafat Movement",
            c: "Non-Cooperation Movement",
            d: "Civil Disobedience Movement",
        },
        answer: "Khilafat Movement"
    },
    {
        id: 10,
        question: "Which mountain is the highest peak in Pakistan?",
        options: {
            a: "K2",
            b: "Nanga Parbat",
            c: "Rakaposhi",
            d: "Tirich Mir",
        },
        answer: "K2"
    },
    {
        id: 11,
        question: "When did Bangladesh separate from Pakistan?",
        options: {
            a: "1965",
            b: "1971",
            c: "1973",
            d: "1980",
        },
        answer: "1971"
    },
    {
        id: 12,
        question: "Which historic agreement was signed between India and Pakistan in 1966?",
        options: {
            a: "Simla Agreement",
            b: "Tashkent Agreement",
            c: "Lahore Declaration",
            d: "Indus Waters Treaty",
        },
        answer: "Tashkent Agreement"
    },
    {
        id: 13,
        question: "Which city served as the first capital of Pakistan?",
        options: {
            a: "Islamabad",
            b: "Karachi",
            c: "Lahore",
            d: "Rawalpindi",
        },
        answer: "Karachi"
    },
    {
        id: 14,
        question: "Who authored the famous book 'Jinnah of Pakistan'?",
        options: {
            a: "Stanley Wolpert",
            b: "Ayesha Jalal",
            c: "William Dalrymple",
            d: "Ahmed Rashid",
        },
        answer: "Stanley Wolpert"
    },
    {
        id: 15,
        question: "Which operation led to the secession of East Pakistan and the creation of Bangladesh?",
        options: {
            a: "Operation Gibraltar",
            b: "Operation Searchlight",
            c: "Operation Grand Slam",
            d: "Operation Brasstacks",
        },
        answer: "Operation Searchlight"
    }
];

var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
userName.innerHTML = localStorage.getItem("name");
userEmail.innerHTML = localStorage.getItem("email");

var htmlQues = document.getElementById("htmlQues");
var htmlOptions = document.getElementById("htmlOptions");
var indexNum = 0;
var nextQuesBtn = document.getElementById("nextQuesBtn");
var correctAnsCount = 0;
var wrongAnsCount = 0;

// Counter
var currentCount = document.getElementById("currentCount");
var totalCount = document.getElementById("totalCount");
totalCount.innerHTML = questions.length;

var timer = document.getElementById("timer");
var timeLeft = 10 * 60; //time for 10 min
// var timeLeft = 1 * 10; //time for 10 min
var timerInterval;

function startQuiz() {
    htmlQues.innerHTML = questions[indexNum].question;
    htmlOptions.innerHTML = "";

    for (var key in questions[indexNum].options) {
        var option = questions[indexNum].options[key];
        htmlOptions.innerHTML += `<li onclick="checkAnswer(this)">${option}</li>`;
    }

    if (!timerInterval) {
        startTimer();
    }
}

function nextQues() {
    if (indexNum < questions.length - 1) {
        indexNum++;
        currentCount.innerHTML = indexNum + 1;
        nextQuesBtn.className = "hide";
        startQuiz();
    } else {
        endQuiz();
    }
}

function checkAnswer(ele) {
    var liOptions = htmlOptions.getElementsByTagName("li");
    var isCheck = ele.innerHTML === questions[indexNum].answer;
    if (isCheck) {
        ele.className = "correctAns";
        correctAnsCount++;
    } else {
        ele.className = "wrongAns";
        wrongAnsCount++;
        for (var li of liOptions) {
            if (li.innerHTML === questions[indexNum].answer) {
                li.className = "correctAns";
            }
        }
    }

    for (var li of liOptions) {
        li.style.pointerEvents = "none";
    }

    nextQuesBtn.className = "show";
}

function endQuiz() {
    clearInterval(timerInterval);
    localStorage.setItem("correctAnsCount", correctAnsCount);
    localStorage.setItem("wrongAnsCount", wrongAnsCount);
    localStorage.setItem("totalQuestions", questions.length);
    window.location.href = "result.html";
}

function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;

        timer.innerHTML = `Time Left: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

window.onload = function() {
    currentCount.innerHTML = 1;
    startQuiz();
};