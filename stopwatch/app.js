

var minHeading = document.getElementById("minHeading");
var secHeading = document.getElementById("secHeading");
var msecHeading = document.getElementById("msecHeading");
var interval;

var msec = 0;
var sec = 0;
var min = 0;

function start() {
    msec++;
    if (msec === 100) {
        sec++;
        msec = 0;
    }
    if (sec === 60) {
        min++;
        sec = 0;
    }

    // Update the display with leading zeros if necessary
    msecHeading.innerHTML = (msec < 10 ? "0" : "") + msec;
    secHeading.innerHTML = (sec < 10 ? "0" : "") + sec;
    minHeading.innerHTML = (min < 10 ? "0" : "") + min;
}

function startWatch() {
    if (!interval) { // Check if interval is already running
        interval = setInterval(start, 10);
    }
}

function resetWatch() {
    clearInterval(interval);
    interval = null; // Reset interval variable
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    msecHeading.innerHTML = "00";
}

function stopWatch() {
    clearInterval(interval);
    interval = null; // Reset interval variable
}
