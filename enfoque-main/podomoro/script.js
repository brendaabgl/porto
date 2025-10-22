let workTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60; // 5 minutes in seconds
let timerInterval;
let isRunning = false;
let isWorkTime = true;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const workTimeInput = document.getElementById('workTime');
const breakTimeInput = document.getElementById('breakTime');
const container = document.querySelector('.container');

function updateTimer() {
    let minutes = Math.floor(workTime / 60);
    let seconds = workTime % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        if (workTime > 0) {
            workTime--;
            updateTimer();
        } else {
            // Ganti ke waktu istirahat langsung tanpa notifikasi
            if (isWorkTime) {
                isWorkTime = false;
                workTime = breakTime;
            } else {
                isWorkTime = true;
                workTime = workTimeInput.value * 60;
            }
            updateTimer();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    workTime = workTimeInput.value * 60;
    updateTimer();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

workTimeInput.addEventListener('change', () => {
    if (!isRunning) {
        workTime = workTimeInput.value * 60;
        updateTimer();
    }
});

breakTimeInput.addEventListener('change', () => {
    if (!isRunning) {
        breakTime = breakTimeInput.value * 60;
    }
});

updateTimer();

// Draggable functionality
let offsetX, offsetY;

container.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - container.getBoundingClientRect().left;
    offsetY = e.clientY - container.getBoundingClientRect().top;
    document.addEventListener('mousemove', mouseMoveHandler);
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
});

function mouseMoveHandler(e) {
    container.style.position = 'absolute';
    container.style.left = `${e.clientX - offsetX}px`;
    container.style.top = `${e.clientY - offsetY}px`;
}
