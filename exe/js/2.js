const buttonPlayAgain = document.querySelector('.play-again');

 // Add event listeners to weapon icons
 document.querySelectorAll('.weapon-icon').forEach(icon => 
  icon.addEventListener('click', getHumanChoice)
);


function getComputerChoice(max) {
    const randomNum = Math.floor(Math.random() * max);
    if (randomNum === 0) {
        return 'sword';
    } else if (randomNum === 1) {
        return 'axe';
    } else {
        return 'trident';
    }
  }
   
  var humanLives = 5, computerLives = 5,round =0;
  
  function getHumanChoice(e) {
    const humanChoice = e.target.classList.contains('sword') ? 'sword' :
                        e.target.classList.contains('axe') ? 'axe' :
                        e.target.classList.contains('trident') ? 'trident' : null;
    if (humanChoice) {
      const computerChoice = getComputerChoice(3);
      playRound(humanChoice, computerChoice);
    }
  }

  function playRound(humanChoice, computerChoice) {
    round++; 
     roundTextElement = document.querySelector('.round');
    roundTextElement.textContent = `⚔️ Round ${round} ⚔️`;

     combatOutputElement = document.querySelector('.combat-text');
     lifeTextElement = document.querySelector('.lives');

    resultDiv = document.querySelector('.result');
     outputDiv =  document.querySelector('.output');

    enemyChoiceIcon = document.querySelector('.enemy-icon');
    enemyChoiceIcon.classList.remove('ra-monster-skull','ra-sword','ra-axe','ra-trident');
   
    if (computerChoice === 'sword') {
      enemyChoiceIcon.classList.add('ra-sword');
     
      enemyChoiceIcon.style.color = '#D69A9A';
    } else if (computerChoice === 'axe') {
        enemyChoiceIcon.classList.add('ra-axe');
        enemyChoiceIcon.style.color = '#8BBEB1';
       
    } else {
        enemyChoiceIcon.classList.add('ra-trident');
        enemyChoiceIcon.style.color = '#B3A3C3';
        
    }
    
    if (humanChoice === computerChoice) {
      combatOutputElement.textContent = `Both wielded ${humanChoice}. A clash with no victor, the battle holds steady.`;
      resultDiv.style.borderColor = `#0a1010`;
      outputDiv.style.borderColor = `#0a1010`;
  } else if (
      (humanChoice === 'sword' && computerChoice === 'axe') ||
      (humanChoice === 'axe' && computerChoice === 'trident') ||
      (humanChoice === 'trident' && computerChoice === 'sword')
  ) {
      combatOutputElement.textContent = `Well struck! Your ${humanChoice} shattered the foe's ${computerChoice}. Their strength falters.`;
      resultDiv.style.borderColor = '#8BBEB1'; 
      outputDiv.style.borderColor = '#8BBEB1';
      computerLives--;
  } else {
      combatOutputElement.textContent = `A grievous blow! Their ${computerChoice} overpowered your ${humanChoice}. Your vigor wanes.`;
      resultDiv.style.borderColor = '#D69A9A'; 
      outputDiv.style.borderColor = '#D69A9A';
      humanLives--;
  }
  
  lifeTextElement.textContent = `💀 Your Lives: ${humanLives} | Enemy Lives: ${computerLives} 💀`;

    if (humanLives == 0 || computerLives == 0) {
        endGame();
    }
}

function endGame() {
  disableButtons();
     endText =document.querySelector('.game-end-text');
     
     //disable events when the game ends
     document.querySelector('.main-content').style.pointerEvents = 'none';


    if(computerLives===0){
      endText.classList.add('axe');
      endText.textContent= 'You Win, Congratulations';

    }
    else{
      endText.classList.add('sword')
      endText.textContent= 'You lost, Good Luck Next Time';
    }
    resetGame();
    buttonPlayAgain.style.visibility = 'visible';
  }



function disableButtons(){
  document.querySelectorAll('.main-content button').forEach(button => {
    button.disabled = true; 
});

document.querySelectorAll('.weapon-icon').forEach(icon => {
    icon.removeEventListener('click', getHumanChoice); 
    icon.remove
});
}

function resetGame() {
  buttonPlayAgain.addEventListener('click', () => {
    window.location.reload();
  });
}