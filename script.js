const sentenceDisplay = document.getElementById('sentenceDisplay');
const inputArea = document.getElementById('inputArea');
const timerElement = document.getElementById('timeLeft');
const wpmElement = document.getElementById('wpm');

const sentence = "The quick brown fox jumps over the lazy dog.";
sentenceDisplay.innerHTML = sentence.split('').map(letter => `<span class="letter">${letter}</span>`).join('');

const letters = document.querySelectorAll('.letter');
let index = 0;
let correctChars = 0;
let startTime;
let timer = 60;
let timerInterval;

// Start the timer on first key press
inputArea.addEventListener('input', () => {
    if (!startTime) {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 1000);
    }

    if (index < sentence.length) {
        if (inputArea.value[index] === sentence[index]) {
            letters[index].classList.add('correct');
            correctChars++;
        } else {
            letters[index].classList.add('incorrect');
        }
        index++;
    }

    if (index === sentence.length || timer === 0) {
        clearInterval(timerInterval);
        calculateWPM();
    }
});

function updateTimer() {
    timer--;
    timerElement.textContent = timer;
    if (timer === 0) {
        clearInterval(timerInterval);
        calculateWPM();
    }
}

function calculateWPM() {
    const timeElapsed = (new Date() - startTime) / 60000; // Convert ms to minutes
    const wpm = Math.round((correctChars / 5) / timeElapsed);
    wpmElement.textContent = wpm;
}
