document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const submitButton = document.getElementById('submit-button');
  const resetButton = document.getElementById('reset-button');
  const timerElement = document.getElementById('timer');
  const resultElement = document.getElementById('result');
  const userNumberInput = document.getElementById('user-number');
  const startPage = document.getElementById('start-page');
  const gamePage = document.getElementById('game-page');

  const TIMER_DURATION = 60;
  let timer;

  startButton.addEventListener('click', startGame);
  submitButton.addEventListener('click', submitGuess);
  resetButton.addEventListener('click', resetGame);

  function startGame() {
    startPage.style.display = 'none';
    gamePage.style.display = 'block';
    startTimer();
    resetResult();
    enableInput();
    submitButton.disabled = true;
  }

  function submitGuess() {
    const userGuess = parseInt(userNumberInput.value);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
      resultElement.textContent = 'Please enter a valid number between 0 and 100.';
      return;
    }

    const botAverage = calculateBotAverage();
    const winningThreshold = 0.8 * botAverage;

    const botAnswers = `Bot 1: ${Math.floor(Math.random() * 101)}, Bot 2: ${Math.floor(Math.random() * 101)}, Bot 3: ${Math.floor(Math.random() * 101)}`;
    const userAnswer = `Your guess: ${userGuess}`;

    if (Math.abs(userGuess - winningThreshold) < Math.abs(botAverage - winningThreshold)) {
      resultElement.textContent = `Congratulations! You win. ${userAnswer} | ${botAnswers}`;
    } else {
      resultElement.textContent = `Sorry, you lose. ${userAnswer} | ${botAnswers}`;
    }

    clearInterval(timer);
    disableInput();
  }

  function calculateBotAverage() {
    return (Math.floor(Math.random() * 101) + Math.floor(Math.random() * 101) + Math.floor(Math.random() * 101)) / 3;
  }

  function resetGame() {
    gamePage.style.display = 'none';
    startPage.style.display = 'block';
    resetTimer();
    resetResult();
    enableInput();
    userNumberInput.value = '';
    submitButton.disabled = true;
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
        disableInput();
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timer);
    timerElement.textContent = TIMER_DURATION;
  }

  function resetResult() {
    resultElement.textContent = '';
  }

  function enableInput() {
    userNumberInput.removeAttribute('readonly');
    userNumberInput.focus();
  }

  function disableInput() {
    userNumberInput.setAttribute('readonly', 'readonly');
  }
});
