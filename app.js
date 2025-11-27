// Timer state variables
const fastTest = false; // Set to true for fast testing, false for normal speed
let remainingTime = 25 * 60; // in seconds
let isRunning = false;
let timerInterval = null;
let isWorkSession = true; // Track if we're in work or break mode

// DOM elements

const timerElement = document.getElementById("timer-display");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");
const workDurationInput = document.getElementById('work-duration');
const breakDurationInput = document.getElementById('break-duration');
const defaultInput = document.getElementById('set-default');
const modeLabel = document.getElementById('mode-label');

// Fill work-duration and break-duration inputs with default values
defaultInput.addEventListener('click', function() {
    workDurationInput.value = 25;
    breakDurationInput.value = 5;
    // Update the timer display if not running
    if (!isRunning) {
        remainingTime = parseInt(workDurationInput.value) * 60;
        isWorkSession = true;
        updateTimerDisplay();
        updateModeLabel();
    }
}); 


// Format time as MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update the timer display
function updateTimerDisplay() {
    timerElement.textContent = formatTime(remainingTime);
}

// Update the Work/Break label and theme
function updateModeLabel() {
    if (!modeLabel) return;
    
    if (!isRunning) {
        // Neutral mode - not started yet
        modeLabel.textContent = 'Ready to start working? 🚀';
    } else {
        // Active mode - show current session
        modeLabel.textContent = isWorkSession ? 'Working time 📚' : 'Break time 📱';
    }
    updateTheme();
}

// Update color theme based on running state and session type
function updateTheme() {
    document.body.classList.remove('work-mode', 'break-mode');
    
    if (isRunning) {
        // Timer is running - show work or break theme
        if (isWorkSession) {
            document.body.classList.add('work-mode');
        } else {
            document.body.classList.add('break-mode');
        }
    }
    // If not running, stay in neutral mode (no class added)
}

// Start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        updateTheme(); // Switch to active theme when starting
        updateModeLabel();
        const intervalSpeed = fastTest ? 50 : 1000; // 100ms for fast test, 1000ms for normal
        timerInterval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updateTimerDisplay();
            } else {
                // Timer reached 0 - switch to next session
                if (isWorkSession) {
                    // Switch to break
                    isWorkSession = false;
                    remainingTime = parseInt(breakDurationInput.value) * 60;
                } else {
                    // Switch to work
                    isWorkSession = true;
                    remainingTime = parseInt(workDurationInput.value) * 60;
                }
                updateTimerDisplay(); // Show the new time immediately
                updateModeLabel();
                // Timer continues running automatically
            }
        }, intervalSpeed);
    }
}

// Pause the timer
function pauseTimer() {
    isRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    updateTheme(); // Return to neutral theme when paused
}

// Reset the timer
function resetTimer() {
    pauseTimer();
    remainingTime = parseInt(workDurationInput.value) * 60;
    isWorkSession = true;
    updateTimerDisplay();
    updateModeLabel();
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Update timer when work duration changes
workDurationInput.addEventListener('input', function() {
    if (!isRunning && isWorkSession) {
        remainingTime = parseInt(this.value) * 60;
        updateTimerDisplay();
        updateModeLabel();
    }
});

// Update timer when break duration changes (if you add break mode later)
breakDurationInput.addEventListener('input', function() {
    if (!isRunning && !isWorkSession) {
        remainingTime = parseInt(this.value) * 60;
        updateTimerDisplay();
        updateModeLabel();
    }
});

// Initialize display
updateTimerDisplay();
updateModeLabel();