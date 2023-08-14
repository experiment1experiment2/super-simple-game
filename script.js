document.addEventListener("DOMContentLoaded", () => {
  const startPage = document.getElementById("start-page");
  const gamePage = document.getElementById("game-page");
  const resetButton = document.getElementById("reset-button");
  const backButton = document.getElementById("back-button");
  const timerDisplay = document.getElementById("timer");
  const numbersDisplay = document.getElementById("numbers");
  const buttonsContainer = document.getElementById("buttons");
  const resultDisplay = document.getElementById("result");
  
  let timerId;
  let timeLeft = 60;
  let bots = [];

  document.getElementById("start-button").addEventListener("click", () => {
    startPage.style.display = "none";
    gamePage.style.display = "block";
    resetButton.style.display = "none";
    backButton.style.display = "inline-block";
    startGame();
  });

  resetButton.addEventListener("click", () => {
    resetButton.style.display = "none";
    resultDisplay.innerHTML = "";
    startGame();
  });

  backButton.addEventListener("click", () => {
    gamePage.style.display = "none";
    startPage.style.display = "block";
    backButton.style.display = "none";
  });

  function startGame() {
    timeLeft = 60;
    timerDisplay.innerHTML = timeLeft;
    numbersDisplay.innerHTML = "";
    buttonsContainer.innerHTML = "";
    bots = Array.from({ length: 3 }, () => Math.floor(Math.random() * 101));

    timerId = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.innerHTML = timeLeft;
      } else {
        clearInterval(timerId);
        calculateResult(null, bots);
      }
    }, 1000);

    for (let i = 0; i <= 100; i++) {
      const button = document.createElement("button");
      button.innerHTML = i;
      button.addEventListener("click", () => {
        selectNumber(i, bots);
      });
      buttonsContainer.appendChild(button);
    }
  }

  function selectNumber(playerNumber, bots) {
    clearInterval(timerId);
    numbersDisplay.textContent = `You selected ${playerNumber}. Bots selected ${bots.join(", ")}.`;
    calculateResult(playerNumber, bots);
  }

  function calculateResult(playerNumber, bots) {
    const total = bots.reduce((acc, bot) => acc + bot, 0);
    if (playerNumber !== null) {
      total += playerNumber;
    }
    const average = total / 4;
    const calculatedNumber = average * 0.8;

    if (playerNumber === null) {
      resultDisplay.textContent = `Time's up! Bots selected ${bots.join(", ")}.`;
    } else {
      const closestNumber = bots.reduce((closest, bot) => (
        Math.abs(bot - calculatedNumber) < Math.abs(closest - calculatedNumber) ? bot : closest
      ));

      if (Math.abs(playerNumber - calculatedNumber) < Math.abs(closestNumber - calculatedNumber)) {
        resultDisplay.textContent = `You won! Your number ${playerNumber} was closest to ${calculatedNumber}.`;
      } else {
        resultDisplay.textContent = `You lost! ${closestNumber} was closest to ${calculatedNumber}.`;
      }
    }
    resetButton.style.display = "block";
  }

  startGame();
});
