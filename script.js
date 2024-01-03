document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const startPage = document.getElementById('start-page');
  const gamePage = document.getElementById('game-page');
  const submitButton = document.getElementById('submit-button');
  const resetButton = document.getElementById('reset-button');
  const timerElement = document.getElementById('timer');
  const resultElement = document.getElementById('result');
  const numberButtonsContainer = document.getElementById('number-buttons');
  const timerDurationElement = document.getElementById('timer-duration');
  const thresholdPercentageElement = document.getElementById('threshold-percentage');

  const TIMER_DURATION = 60;
  const WINNING_THRESHOLD_PERCENTAGE = 80;
  let timer;

  startButton.addEventListener('click', startGame);
  submitButton.addEventListener('click', submitGuess);
  resetButton.addEventListener('click', resetGame);

  function startGame() {
    startPage.style.display = 'none';
    gamePage.style.display = 'block';
    resetButton.classList.remove('d-none');
    resetTimer();
    startTimer();
    createNumberButtons();
  }

  function createNumberButtons() {
    for (let i = 0; i <= 100; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', function () {
        submitButton.disabled = false;
        clearSelectedButtons();
        button.classList.add('selected');
      });
      numberButtonsContainer.appendChild(button);
    }
  }

  function clearSelectedButtons() {
    const buttons = document.querySelectorAll('.number-buttons button');
    buttons.forEach(button => button.classList.remove('selected'));
  }

  function submitGuess() {
    const selectedButton = document.querySelector('.number-buttons button.selected');

    if (!selectedButton) {
      resultElement.textContent = 'Please select a number first.';
      return;
    }

    const userGuess = parseInt(selectedButton.textContent);
    const botAverage = calculateBotAverage();
    const winningThreshold = (WINNING_THRESHOLD_PERCENTAGE / 100) * botAverage;

    const botAnswers = generateBotAnswers();
    const userAnswer = `Your guess: ${userGuess}`;

    if (Math.abs(userGuess - winningThreshold) < Math.abs(botAverage - winningThreshold)) {
      resultElement.textContent = `Congratulations! You win. ${userAnswer} | ${botAnswers}`;
    } else {
      resultElement.textContent = `Sorry, you lose. ${userAnswer} | ${botAnswers}`;
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

  function generateBotAnswers() {
    const bot1 = Math.floor(Math.random() * 101);
    const bot2 = Math.floor(Math.random() * 101);
    const bot3 = Math.floor(Math.random() * 101);

    return `Bot 1: ${bot1}, Bot 2: ${bot2}, Bot 3: ${bot3}`;
  }

  function resetGame() {
    gamePage.style.display = 'none';
    startPage.style.display = 'block';
    resetButton.classList.add('d-none');
    resultElement.textContent = '';
    clearNumberButtons();
    resetTimer();
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
