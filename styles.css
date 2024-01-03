document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const startPage = document.getElementById('start-page');
  const gamePage = document.getElementById('game-page');
  const submitButton = document.getElementById('submit-button');
  const resetButton = document.getElementById('reset-button');
  const timerElement = document.getElementById('timer');
  const resultElement = document.getElementById('result');
  const numberButtonsContainer = document.getElementById('number-buttons');
  const userInput = document.getElementById('user-input');

  const TIMER_DURATION = 60;
  let timer;

  startButton.addEventListener('click', startGame);
  submitButton.addEventListener('click', submitGuess);
  resetButton.addEventListener('click', resetGame);

  function startGame() {
    startPage.style.display = 'none';
    gamePage.style.display = 'block';
    resetButton.classList.remove('d-none');
    startTimer();
    createNumberButtons();
  }

  function createNumberButtons() {
    for (let i = 0; i <= 100; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', function () {
        userInput.value = i;
      });
      numberButtonsContainer.appendChild(button);
    }
  }

  function submitGuess() {
    const userGuess = parseInt(userInput.value);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
      resultElement.textContent = 'Please enter a valid number between 0 and 100.';
      return;
    }

    const botAverage = calculateBotAverage();
    const winningThreshold = 0.8 * botAverage;

    if (Math.abs(userGuess - winningThreshold) < Math.abs(botAverage - winningThreshold)) {
      resultElement.textContent = 'Congratulations! You win!';
    } else {
      resultElement.textContent = 'Sorry, you lose. Try again!';
    }

    clearInterval(timer);
    disableSubmitButton();
  }

  function calculateBotAverage() {
    const bot1 = Math.floor(Math.random() * 101);
    const bot2 = Math.floor(Math.random() * 101);
    const bot3 = Math.floor(Math.random() * 101);

    return (bot1 + bot2 + bot3) / 3;
  }

  function resetGame() {
    gamePage.style.display = 'none';
    startPage.style.display = 'block';
    resetButton.classList.add('d-none');
    resetTimer();
    userInput.value = '';
    resultElement.textContent = '';
    clearNumberButtons();
  }

  function clearNumberButtons() {
    numberButtonsContainer.innerHTML = '';
  }

  function startTimer() {
    let seconds = TIMER_DURATION;
    timerElement.textContent = seconds;

    timer = setInterval(function () {
      seconds--;
      timerElement.textContent = seconds;

      if (seconds <= 0) {
        clearInterval(timer);
        resultElement.textContent = 'Time is up! You lose.';
        disableSubmitButton();
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timer);
    timerElement.textContent = TIMER_DURATION;
  }

  function disableSubmitButton() {
    submitButton.disabled = true;
  }
});
