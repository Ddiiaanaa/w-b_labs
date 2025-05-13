document.addEventListener("DOMContentLoaded", () => {
    const gridElement = document.getElementById("grid");
    const timerElement = document.getElementById("timer");
    const movesElement = document.getElementById("moves");
    const minMovesElement = document.getElementById("min-moves");
    const newGameButton = document.getElementById("new-game");
    const restartButton = document.getElementById("restart");

    let grid = [];
    let moves = 0;
    let seconds = 0;
    let timerId = null;
    let configs = [];
    let usedConfigIds = JSON.parse(localStorage.getItem("usedConfigIds")) || [];
    let currentConfig = null;

    fetch("data/configs.json")
        .then(response => {
            if (!response.ok) throw new Error("Не вдалося завантажити configs.json");
            return response.json();
        })
        .then(data => {
            configs = data;
            console.log("Конфігурації завантажено:", configs);
            startNewGame();
        })
        .catch(error => {
            console.error("Помилка завантаження конфігурацій:", error);
            alert("Не вдалося завантажити дані гри. Перевірте підключення або шлях до configs.json.");
        });

    function startNewGame() {
        clearInterval(timerId);
        seconds = 0;
        moves = 0;
        timerElement.textContent = formatTime(seconds);
        movesElement.textContent = moves;

        let availableConfigs = configs.filter(c => !usedConfigIds.includes(c.id));
        if (availableConfigs.length === 0) {
            usedConfigIds = [];
            availableConfigs = configs;
        }
        currentConfig = availableConfigs[Math.floor(Math.random() * availableConfigs.length)];
        usedConfigIds.push(currentConfig.id);
        localStorage.setItem("usedConfigIds", JSON.stringify(usedConfigIds));

        grid = currentConfig.grid.map(row => [...row]);
        minMovesElement.textContent = currentConfig.minSteps;

        renderGrid();
        startTimer();
    }
    function restartGame() {
        clearInterval(timerId);
        seconds = 0;
        moves = 0;
        timerElement.textContent = formatTime(seconds);
        movesElement.textContent = moves;
        grid = currentConfig.grid.map(row => [...row]);
        renderGrid();
        startTimer();
    }
    function renderGrid() {
        gridElement.innerHTML = "";
        if (!grid || !grid.length) {
            console.error("Сітка не ініціалізована:", grid);
            return;
        }
        grid.forEach((row, i) => {
            row.forEach((cell, j) => {
                const cellElement = document.createElement("div");
                cellElement.classList.add("cell", cell === 1 ? "on" : "off");
                cellElement.addEventListener("click", () => toggleCell(i, j));
                gridElement.appendChild(cellElement);
            });
        });
        checkWin();
    }
    function toggleCell(i, j) {
        const directions = [
            [i, j],
            [i - 1, j],
            [i + 1, j],
            [i, j - 1],
            [i, j + 1]
        ];
        directions.forEach(([ni, nj]) => {
            if (ni >= 0 && ni < 5 && nj >= 0 && nj < 5) {
                grid[ni][nj] = 1 - grid[ni][nj];
            }
        });

        moves++;
        movesElement.textContent = moves;
        renderGrid();
    }
    function checkWin() {
        if (!grid || !grid.length) return;
        const isWin = grid.every(row => row.every(cell => cell === 0));
        if (isWin) {
            clearInterval(timerId);
            alert(`Вітаємо! Ви перемогли за ${moves} ходів (мінімум: ${currentConfig.minSteps})!`);
        }
    }
    function startTimer() {
        clearInterval(timerId);
        timerId = setInterval(() => {
            seconds++;
            timerElement.textContent = formatTime(seconds);
        }, 1000);
    }
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    newGameButton.addEventListener("click", startNewGame);
    restartButton.addEventListener("click", restartGame);
});
