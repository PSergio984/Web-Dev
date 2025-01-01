function getComputerChoice(max) {
  const randomNum = Math.floor(Math.random() * max);
  if (randomNum === 0) {
      return 'rock';
  } else if (randomNum === 1) {
      return 'paper';
  } else {
      return 'scissors';
  }
}

function getHumanChoice() {
 
}

var humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
  alert('Computer chose: ' + computerChoice);
  if (humanChoice === computerChoice) {
      alert('It is a tie');
  } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissors' && computerChoice === 'paper')) {
      alert('You win');
      humanScore++;
  } else {
      alert('You lose');
      computerScore++;
  }
}

function playGame() {
  
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice(3);
      playRound(humanSelection, computerSelection);
  

  alert(`FINAL SCORE: Human: ${humanScore} - Computer: ${computerScore}.`);
  if (humanScore > computerScore) {
    alert(` Human wins the game`);
} else if (humanScore === computerScore) {
    alert(` It is a tie`);
 } else {
    alert(` Computer wins the game`);
 }
}

//playGame();