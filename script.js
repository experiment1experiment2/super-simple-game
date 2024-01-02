const startButton = document.getElementById("start-button");
const gamePage = document.getElementById("game-page");
const timerDisplay = document.getElementById("timer");
const numbersDisplay = document.getElementById("numbers");
const buttonsContainer = document.getElementById("buttons");
const resultDisplay = document.getElementById("result");
const resetButton = document.getElementById("reset-button");
const backButton = document.getElementById("back-button");

let gameStarted = false;
let timer = 60;
let botNumbers = [];
let playerNumber = null;

startButton.addEventListener("click", () => {
  gamePage.style.display = "block";
  startPage.style.display = "none";
  generateBotNumbers();
  createNumberButtons();
  startGame();
});

resetButton.addEventListener("click", () => {
  resetGame();
});

backButton.addEventListener("click", () => {
  gamePage.style.display = "none";
  startPage.style.display = "block";
  resetGame();
});

function startGame() {
  gameStarted = true;
  timerInterval = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer === 0) {
      endGame();
    }
  }, 1000);
}

// ... rest of the game logic functions (generateBotNumbers, createNumberButtons, handlePlayerClick, endGame, calculateWinner, resetGame)

