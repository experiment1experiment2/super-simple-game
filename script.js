document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const startPage = document.getElementById('start-page');
  const gamePage = document.getElementById('game-page');
  const resetButton = document.getElementById('reset-button');
  const backButton = document.getElementById('back-button');
  const timerElement = document.getElementById('timer');
  const numbersElement = document.getElementById('numbers');
  const buttonsElement = document.getElementById('buttons');
  const resultElement = document.getElementById('result');

  let timer;

  startButton.addEventListener('click', startGame);
  resetButton.addEventListener('click', resetGame);
  backButton.addEventListener('click', goBack);

  function startGame() {
    startPage.style.display = 'none';
    gamePage.style.display = 'block';
    resetButton.classList.remove('d-none');
    backButton.classList.remove('d-none');
    startTimer();

    // Your game logic goes here
  }

  function resetGame() {
    gamePage.style.display = 'none';
    startPage.style.display = 'block';
    resetButton.classList.add('d-none');
    backButton.classList.add('d-none');
    resetTimer();
  }

  function goBack() {
    gamePage.style.display = 'none';
    startPage.style.display = 'block';
    resetButton.classList.add('d-none');
    backButton.classList.add('d-none');
    resetTimer();
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
