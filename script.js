document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const startPage = document.getElementById('start-page');
  const gamePage = document.getElementById('game-page');
  const submitButton = document.getElementById('submit-button');
  const resetButton = document.getElementById('reset-button');
  const backButton = document.getElementById('back-button');  // Keep this line for resetting the game
  const timerElement = document.getElementById('timer');
  const userInput = document.getElementById('user-input');
  const resultElement = document.getElementById('result');

  let timer;

  startButton.addEventListener('click', startGame);
  submitButton.addEventListener('click', submitGuess);
  resetButton.addEventListener('click', resetGame);

  function startGame() {
    startPage.style.display = 'none';
    gamePage.style.display = 'block';
    resetButton.classList.remove('d-none');
    backButton.style.display = 'inline-block';  // Show the back button
    startTimer();
  }

  function submitGuess() {
    // Your existing submitGuess function
  }

  function resetGame() {
    gamePage.style.display = 'none';
    startPage.style.display = 'block';
    resetButton.classList.add('d-none');
    backButton.style.display = 'none';  // Hide the back button
    resetTimer();
    userInput.value = '';
    resultElement.textContent = '';
  }

  function startTimer() {
    // Your existing startTimer function
  }

  function resetTimer() {
    // Your existing resetTimer function
  }
});
