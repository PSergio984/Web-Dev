
function getComputerChoice(max) {
  const randomNum = Math.floor(Math.random() * max);
  if (randomNum === 0) {
      return 'sword';
  } else if (randomNum === 1) {
      return 'axe';
  } else {
      return 'tridents';
  }
}



var humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
      
  } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissors' && computerChoice === 'paper')) {
     
      humanScore++;
  } else {
      
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