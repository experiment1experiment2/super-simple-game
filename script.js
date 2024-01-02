document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const startPage = document.getElementById('start-page');
  const gamePage = document.getElementById('game-page');
  const submitButton = document.getElementById('submit-button');
  const resetButton = document.getElementById('reset-button');
  const backButton = document.getElementById('back-button');
  const timerElement = document.getElementById('timer');
  const userInput = document.getElementById('user-input');
  const resultElement = document.getElementById('result');

  let timer;

  startButton.addEventListener('click', startGame);
  submitButton.addEventListener('click', submitGuess);
  resetButton.addEventListener('click', resetGame);
  backButton.addEventListener('click', goBack);

  function startGame() {
    startPage.style.display = 'none';
    gamePage.style.display = 'block';
    resetButton.classList.remove('d-none');
    backButton.classList.remove('d-none');
    startTimer();
  }

  function submitGuess() {
    const userNumber = parseInt(userInput.value);
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 100) {
      resultElement.textContent = 'Please enter a valid number between 0 and 100.';
      return;
    }

    const bot1Number = Math.floor(Math.random() * 101);
    const bot2Number = Math.floor(Math.random() * 101);

    const average = (userNumber + bot1Number + bot2Number) / 3;

    const userDifference = Math.abs(average * 0.8 - userNumber);
    const bot1Difference = Math.abs(average * 0.8 - bot1Number);
    const bot2Difference = Math.abs(average * 0.8 - bot2Number);

    let winner;
    if (userDifference < bot1Difference && userDifference < bot2Difference) {
      winner = 'You';
    } else if (bot1Difference < userDifference && bot1Difference < bot2Difference) {
      winner = 'Bot 1';
    } else {
      winner = 'Bot 2';
    }

    resultElement.textContent = `Your guess: ${userNumber}, Bot 1: ${bot1Number}, Bot 2: ${bot2Number}. ${winner} wins!`;

    clearInterval(timer);
  }

  function resetGame() {
    gamePage.style.display = 'none';
    startPage.style.display = 'block';
    resetButton.classList.add('d-none');
    backButton.classList.add('d-none');
    resetTimer();
    userInput.value = '';
    resultElement.textContent = '';
  }

  function goBack() {
    gamePage.style.display = 'none';
    startPage.style.display = 'block';
    resetButton.classList.add('d-none');
    backButton.classList.add('d-none');
    resetTimer();
    userInput.value = '';
    resultElement.textContent = '';
  }

  function startTimer() {
    let seconds = 60;
    timerElement.textContent = seconds;

    timer = setInterval(function () {
      seconds--;
      timerElement.textContent = seconds;

      if (seconds <= 0) {
        clearInterval(timer);
        resultElement.textContent = 'Time is up! You lose.';
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timer);
    timerElement.textContent = '60';
  }
});
