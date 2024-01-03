// JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const startPage = document.getElementById('start-page');
  const gamePage = document.getElementById('game-page');
  const submitButton = document.getElementById('submit-button');
  const resetButton = document.getElementById('reset-button');
  const timerElement = document.getElementById('timer');
  const resultElement = document.getElementById('result');
  const numberButtonsContainer = document.getElementById('number-buttons');

  const TIMER_DURATION = 60;
  const WINNING_THRESHOLD_PERCENTAGE = 0.8;
  const NUM_BOTS = 3;
  let timer;

  startButton.addEventListener('click', startGame);
  submitButton.addEventListener('click', submitGuess);
  resetButton.addEventListener('click', resetGame);

  function startGame() {
    hideElement(startPage);
    showElement(gamePage);
    resetButton.classList.remove('d-none');
    startTimer();
    createNumberButtons();
  }

  function createNumberButtons() {
    for (let i = 0; i <= 100; i++) {
      const button = createNumberButton(i);
      numberButtonsContainer.appendChild(button);
    }
  }

  function createNumberButton(number) {
    const button = document.createElement('button');
    button.textContent = number;
    button.addEventListener('click', function () {
      submitButton.disabled = false;
      clearSelectedButtons();
      button.classList.add('selected');
    });
    return button;
  }

  function clearSelectedButtons() {
    document.querySelectorAll('.number-buttons button.selected').forEach(button => button.classList.remove('selected'));
  }

  function submitGuess() {
    const selectedButton = document.querySelector('.number-buttons button.selected');

    if (!selectedButton) {
      resultElement.textContent = 'Please select a number first.';
      return;
    }

    const userGuess = parseInt(selectedButton.textContent);
    const botAverage = calculateBotAverage();
    const winningThreshold = WINNING_THRESHOLD_PERCENTAGE * botAverage;

    const botAnswers = generateBotAnswers();
    const userAnswer = `Your guess: ${userGuess}`;

    if (isUserWinner(userGuess, botAverage, winningThreshold)) {
      resultElement.textContent = `Congratulations! You win. ${userAnswer} | ${botAnswers}`;
    } else {
      resultElement.textContent = `Sorry, you lose. ${userAnswer} | ${botAnswers}`;
    }

    clearInterval(timer);
    disableSubmitButton();
  }

  function calculateBotAverage() {
    return Array.from({ length: NUM_BOTS }, () => Math.floor(Math.random() * 101))
      .reduce((sum, num) => sum + num, 0) / NUM_BOTS;
  }

  function generateBotAnswers() {
    return Array.from({ length: NUM_BOTS }, () => `Bot ${Math.floor(Math.random() * 101)}`).join(', ');
  }

  function isUserWinner(userGuess, botAverage, winningThreshold) {
    return Math.abs(userGuess - winningThreshold) < Math.abs(botAverage - winningThreshold);
  }

  function resetGame() {
    showElement(startPage);
    hideElement(gamePage);
    resetButton.classList.add('d-none');
    resetTimer();
    resultElement.textContent = '';
    clearNumberButtons();
  }

  function clearNumberButtons() {
    numberButtonsContainer.innerHTML = '';
  }

  function showElement(element) {
    element.style.display = 'block';
  }

  function hideElement(element) {
    element.style.display = 'none';
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
