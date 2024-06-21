let timer;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let milliseconds = 0;
        let isRunning = false;

        const hoursDisplay = document.getElementById('hours');
        const minutesDisplay = document.getElementById('minutes');
        const secondsDisplay = document.getElementById('seconds');
        const millisecondsDisplay = document.getElementById('milliseconds');
        const startButton = document.getElementById('start');
        const stopButton = document.getElementById('stop');
        const resetButton = document.getElementById('reset');
        const setButton = document.getElementById('set');
        const resetInputsButton = document.getElementById('resetInputs');
        const inputHours = document.getElementById('inputHours');
        const inputMinutes = document.getElementById('inputMinutes');
        const inputSeconds = document.getElementById('inputSeconds');
        const inputMilliseconds = document.getElementById('inputMilliseconds');

        function updateDisplay() {
            hoursDisplay.textContent = String(hours).padStart(2, '0');
            minutesDisplay.textContent = String(minutes).padStart(2, '0');
            secondsDisplay.textContent = String(seconds).padStart(2, '0');
            millisecondsDisplay.textContent = String(Math.floor(milliseconds / 10)).padStart(2, '0');
        }

        function startTimer() {
            if (!isRunning) {
                if (!timer) {
                    hours = parseInt(inputHours.value) || 0;
                    minutes = parseInt(inputMinutes.value) || 0;
                    seconds = parseInt(inputSeconds.value) || 0;
                    milliseconds = (parseInt(inputMilliseconds.value) || 0) * 10;
                    updateDisplay();
                }
                isRunning = true;
                timer = setInterval(() => {
                    if (milliseconds > 0 || seconds > 0 || minutes > 0 || hours > 0) {
                        if (milliseconds > 0) {
                            milliseconds -= 10;
                        } else if (seconds > 0) {
                            milliseconds = 990;
                            seconds--;
                        } else if (minutes > 0) {
                            milliseconds = 990;
                            seconds = 59;
                            minutes--;
                        } else if (hours > 0) {
                            milliseconds = 990;
                            seconds = 59;
                            minutes = 59;
                            hours--;
                        }
                    } else {
                        stopTimer();
                    }
                    updateDisplay();
                }, 10);
            }
        }

        function stopTimer() {
            isRunning = false;
            clearInterval(timer);
            timer = null;
        }

        function resetTimer() {
            stopTimer();
            hours = 0;
            minutes = 0;
            seconds = 0;
            milliseconds = 0;
            updateDisplay();
        }

        function setTimer() {
            hours = parseInt(inputHours.value) || 0;
            minutes = parseInt(inputMinutes.value) || 0;
            seconds = parseInt(inputSeconds.value) || 0;
            milliseconds = (parseInt(inputMilliseconds.value) || 0) * 10;
            updateDisplay();
        }

        function resetInputs() {
            inputHours.value = '';
            inputMinutes.value = '';
            inputSeconds.value = '';
            inputMilliseconds.value = '';
            resetTimer();
        }

        startButton.addEventListener('click', startTimer);
        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);
        setButton.addEventListener('click', setTimer);
        resetInputsButton.addEventListener('click', resetInputs);

        updateDisplay(); 