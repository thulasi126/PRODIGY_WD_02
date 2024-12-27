let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeDisplay = document.getElementById('timeDisplay');
const startStopButton = document.getElementById('startStop');

function updateTimeDisplay() {
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeDisplay.textContent = formattedTime;
}

function startStop() {
    if (running) {
        // Stop the stopwatch
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        // Start the stopwatch
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateTimeDisplay();
        }, 1000);
        startStopButton.textContent = 'Stop';
    }
    running = !running;
}

function reset() {
    // Stop the stopwatch and reset the time
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimeDisplay();
    startStopButton.textContent = 'Start';
}

updateTimeDisplay(); // Initialize the display
