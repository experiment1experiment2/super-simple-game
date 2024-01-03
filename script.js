document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const startPage = document.getElementById('start-page');
  const gamePage = document.getElementById('game-page');
  const submitButton = document.getElementById('submit-button');
  const resetButton = document.getElementById('reset-button');
  const timerElement = document.getElementById('timer');
  const resultElement = document.getElementById('result');
  const userNumberInput = document.getElementById('user-number');

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
    userNumberInput.value = '';
    userNumberInput.removeAttribute('readonly');
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

    const bot1 = Math.floor(Math.random() * 101);
    const bot2 = Math.floor(Math.random() * 101);
    const bot3 = Math.floor(Math.random() * 101);

    const botAnswers = `Bot 1: ${bot1}, Bot 2: ${bot2}, Bot 3: ${bot3}`;
    const userAnswer = `Your guess: ${userGuess}`;

    if (Math.abs(userGuess - winningThreshold) < Math.abs(botAverage - winningThreshold)) {
      resultElement.textContent = `Congratulations! You win. ${userAnswer} | ${botAnswers}`;
    } else {
      resultElement.textContent = `Sorry, you lose. ${userAnswer} | ${botAnswers}`;
    }

    clearInterval(timer);
    submitButton.disabled = true;
    userNumberInput.setAttribute('readonly', 'readonly');
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
    resultElement.textContent = '';
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
        userNumberInput.setAttribute('readonly', 'readonly');
        submitButton.disabled = true;
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timer);
    timerElement.textContent = TIMER_DURATION;
  }
});
