let difficulty, color, timeLimit, moveRange, blockSize;
let timerId;
let score = 0;
let isGameOver = false;
let countdownInterval;

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const block = document.getElementById('block');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

function startGame() {
    difficulty = document.getElementById('difficulty').value;
    color = document.getElementById('color').value;

    if (!difficulty || !color) {
        alert('Будь ласка, виберіть рівень складності та колір.');
        return;
    }

    setupDifficulty(difficulty);
    block.style.backgroundColor = color;

    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    restartBtn.style.display = 'none'; 

    score = 0;
    isGameOver = false;
    block.style.display = 'block';
    updateScore();
    moveBlock(true);
    startTimer();
}

function setupDifficulty(level) {
    if (level === 'easy') {
        timeLimit = 4000; 
        moveRange = 150; 
        blockSize = 60;
    } else if (level === 'medium') {
        timeLimit = 2000; 
        moveRange = 400; 
        blockSize = 50;
    } else if (level === 'hard') {
        timeLimit = 1000; 
        moveRange = 9999; 
        blockSize = 40;
    }
    block.style.width = blockSize + "px";
    block.style.height = blockSize + "px";
}

function moveBlock(firstMove = false) {
    if (isGameOver) return;

    const playField = document.getElementById('play-field');
    const fieldWidth = playField.clientWidth - block.offsetWidth;
    const fieldHeight = playField.clientHeight - block.offsetHeight;

    let left, top;

    if (difficulty === 'hard') {
        left = Math.floor(Math.random() * fieldWidth);
        top = Math.floor(Math.random() * fieldHeight);
    } else {
        if (firstMove) {
            left = fieldWidth / 2;
            top = fieldHeight / 2;
        } else {
            const currentLeft = block.offsetLeft;
            const currentTop = block.offsetTop;
            const deltaX = (Math.random() - 0.5) * moveRange;
            const deltaY = (Math.random() - 0.5) * moveRange;

            left = Math.min(Math.max(currentLeft + deltaX, 0), fieldWidth);
            top = Math.min(Math.max(currentTop + deltaY, 0), fieldHeight);
        }
    }
    block.style.left = left + 'px';
    block.style.top = top + 'px';
}

function startTimer() {
    clearTimers();

    let timeLeft = timeLimit / 1000; 

    updateTimerDisplay(timeLeft); 

    countdownInterval = setInterval(() => {
        timeLeft -= 0.1;

        if (timeLeft <= 0) {
            updateTimerDisplay(0);
            clearTimers();
            endGame();
        } else {
            updateTimerDisplay(timeLeft);
        }
    }, 100); 
}

function updateTimerDisplay(t) {
    timerDisplay.textContent = `Час: ${t.toFixed(1)} с`;
}

function clearTimers() {
    clearInterval(countdownInterval);
    clearTimeout(timerId);
}

function updateScore() {
    scoreDisplay.textContent = `Очки: ${score}`;
}

block.addEventListener('click', () => {
    if (isGameOver) return;

    score++;
    updateScore();
    moveBlock();
    startTimer();
});

function endGame() {
    isGameOver = true;
    clearTimers();
    alert(`Гру закінчено! Ви набрали ${score} очків.`);
    block.style.display = 'none';
    restartBtn.style.display = 'inline-block'; 
}

function restartGame() {
    startScreen.style.display = 'block';
    gameScreen.style.display = 'none';
}
