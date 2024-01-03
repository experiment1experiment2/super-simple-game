document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const startPage = document.getElementById('start-page');
  const gamePage = document.getElementById('game-page');
  const submitButton = document.getElementById('submit-button');
  const resetButton = document.getElementById('reset-button');
  const timerElement = document.getElementById('timer');
  const resultElement = document.getElementById('result');
  const numberButtonsContainer = document.getElementById('number-buttons');

  const TIMER_DURATION = 60; // Constant for initial timer value
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
    // Your existing submitGuess function
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
