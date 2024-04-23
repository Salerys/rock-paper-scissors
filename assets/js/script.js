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

    let userScore = 0,
    computerScore = 0;

  function showSymbol(humanInput) {
    const computersChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('user-choice').innerHTML = humanInput;
    document.getElementById('computer-choice').innerHTML = computersChoice;
    outcomes(humanInput, computersChoice);
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
  
  function showWinner() {
    if (userScore === 10) {
      document.getElementById('winner').innerHTML = 'You won!';
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
  }
  
  /*
  RULES:
  Scissors cuts paper.
  Paper covers rock.
  Rock crushes lizard.
  Lizard poisons Spock.
  Spock smashes scissors.
  Scissors decapitates lizard.
  Lizard eats paper.
  Paper disproves Spock.
  Spock vaporizes rock.
  Rock crushes scissors.
  */