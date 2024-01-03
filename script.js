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
    let timer;

    startButton.addEventListener('click', startGame);
    submitButton.addEventListener('click', submitGuess);
    resetButton.addEventListener('click', resetGame);

    function startGame() {
        startPage.style.display = 'none';
        gamePage.style.display = 'block';
        resetButton.classList.remove('d-none');
        startTimer();
        createNumberInput();
    }

    function createNumberInput() {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'user-guess';
        input.classList.add('form-control');
        input.placeholder = 'Enter a number between 0 and 100';

        numberButtonsContainer.appendChild(input);
    }

    function submitGuess() {
        const userGuessInput = document.getElementById('user-guess');
        const userGuess = parseInt(userGuessInput.value);

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
        resultElement.textContent = '';
        clearNumberInput();
    }

    function clearNumberInput() {
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
