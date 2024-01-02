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
    // Handle user's guess and calculate result
    // Display result in resultElement
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
        // Handle timeout
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timer);
    timerElement.textContent = '60';
  }
});
