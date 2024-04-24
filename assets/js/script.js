const rules = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const lizardBtn = document.getElementById('lizard-btn');
const spockBtn = document.getElementById('spock-btn');
const symbolButtons = [rockBtn, paperBtn, scissorsBtn, lizardBtn, spockBtn];

let userScore = 0;
let computerScore = 0;
let nameInput;

function saveName() {
  let storeNameInput = document.getElementById('name').value;

  if (storeNameInput.length > 0) {
    document.getElementById('user-name').innerHTML = storeNameInput;
    nameInput = storeNameInput;
    clearInput();
  } else {
    document.getElementById('user-name').innerHTML = 'You';
    nameInput = 'You';
    clearInput();
  }
}

function clearInput() {
  document.getElementById('name').value = '';
}

function showSymbol(humanInput) {
  const computerInput = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('user-choice').innerHTML = humanInput;
  document.getElementById('computer-choice').innerHTML = computerInput;
  outcomes(humanInput, computerInput);
}

function outcomes(humanInput, computerInput) {
  if (rules[humanInput].includes(computerInput)) {
    showScore((userScore += 1), 'user-score');
  } else if (rules[computerInput].includes(humanInput)) {
    showScore((computerScore += 1), 'computer-score');
  } else {
    showScore(null, null);
  }
  showWinner();
}

function showScore(score, id) {
  if (id) document.getElementById(id).innerHTML = score;
}

function showWinner() {
  if (userScore === 10) {
    document.getElementById('winner').innerHTML = `${
      nameInput ? nameInput + ' won!' : 'You won!'
    } `;
    disbleButtons(true);
  }
  if (computerScore === 10) {
    document.getElementById('winner').innerHTML = 'Computer won!';
    disbleButtons(true);
  }
}

function disbleButtons(value) {
  symbolButtons.forEach((button) => {
    button.disabled = value;
  });
}

function resetGame() {
  document.getElementById('winner').innerHTML = '';
  document.getElementById('user-score').innerHTML = 0;
  document.getElementById('user-choice').innerHTML = '';
  document.getElementById('computer-score').innerHTML = 0;
  document.getElementById('computer-choice').innerHTML = '';
  userScore = 0;
  computerScore = 0;
  disbleButtons(false);
  clearInput();
}