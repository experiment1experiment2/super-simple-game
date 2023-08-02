let timerId;

document.getElementById("start-button").addEventListener("click", () => {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("game-page").style.display = "block";
  document.getElementById("reset-button").style.display = "none";
  document.getElementById("back-button").style.display = "inline-block";
  startGame();
});

document.getElementById("reset-button").addEventListener("click", () => {
  document.getElementById("reset-button").style.display = "none";
  document.getElementById("result").innerHTML = "";
  startGame();
});

document.getElementById("back-button").addEventListener("click", () => {
  document.getElementById("game-page").style.display = "none";
  document.getElementById("start-page").style.display = "block";
  document.getElementById("back-button").style.display = "none";
});

function startGame() {
  let timeLeft = 60;
  document.getElementById("timer").innerHTML = timeLeft;
  document.getElementById("numbers").innerHTML = "";
  document.getElementById("buttons").innerHTML = "";

  let bot1 = Math.floor(Math.random() * 101);
  let bot2 = Math.floor(Math.random() * 101);
  let bot3 = Math.floor(Math.random() * 101);
  let bots = [bot1, bot2, bot3];

  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      document.getElementById("timer").innerHTML = timeLeft;
    } else {
      clearInterval(timerId);
      calculateResult(null, bots);
    }
  }, 1000);

  for (let i = 0; i <= 100; i++) {
    let button = document.createElement("button");
    button.innerHTML = i;
    button.addEventListener("click", () => {
      selectNumber(i, bots);
    });
    document.getElementById("buttons").appendChild(button);
  }
}

function selectNumber(playerNumber, bots) {
  clearInterval(timerId);
  let numbers = document.getElementById("numbers");
  numbers.innerHTML = `You selected ${playerNumber}. Bots selected ${bots[0]}, ${bots[1]}, ${bots[2]}.`;
  calculateResult(playerNumber, bots);
}

function calculateResult(playerNumber, bots) {
  let total = 0;
  for (let i = 0; i < bots.length; i++) {
    total += bots[i];
  }
  if (playerNumber !== null) {
    total += playerNumber;
  }
  let average = total / 4;
  let calculatedNumber = average * 0.8;
  let result = document.getElementById("result");
  let message;
  if (playerNumber === null) {
    message = `Time's up! Bots selected ${bots[0]}, ${bots[1]}, ${bots[2]}.`;
  } else {
    let closestNumber = bots[0];
    for (let i = 0; i < bots.length; i++) {
      if (Math.abs(bots[i] - calculatedNumber) < Math.abs(closestNumber - calculatedNumber)) {
        closestNumber = bots[i];
      }
    }
    if (Math.abs(playerNumber - calculatedNumber) < Math.abs(closestNumber - calculatedNumber)) {
      message = `You won! Your number ${playerNumber} was closest to ${calculatedNumber}.`;
    } else {
      message = `You lost! ${closestNumber} was closest to ${calculatedNumber}.`;
    }
  }
  result.innerHTML = message;
  document.getElementById("reset-button").style.display = "block";
}

startGame();
