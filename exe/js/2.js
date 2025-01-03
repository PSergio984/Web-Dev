
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
    // Add event listeners to weapon icons
    document.querySelectorAll('.weapon-icon').forEach(icon => 
        icon.addEventListener('click', getHumanChoice)
      );
      
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
    round++; // Increment the round counter
    const roundTextElement = document.querySelector('.round');
    roundTextElement.textContent = `⚔️ Round ${round} ⚔️`;

    const combatOutputElement = document.querySelector('.combat-text');
    const lifeTextElement = document.querySelector('.lives');

    const enemyChoiceIcon = document.querySelector('.enemy-icon');
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
    } else if (
        (humanChoice === 'sword' && computerChoice === 'axe') ||
        (humanChoice === 'axe' && computerChoice === 'trident') ||
        (humanChoice === 'trident' && computerChoice === 'sword')
    ) {
        combatOutputElement.textContent = `Well struck! Your ${humanChoice} shattered the foe's ${computerChoice}. Their strength falters.`;
        computerLives--;
    } else {
        combatOutputElement.textContent = `A grievous blow! Their ${computerChoice} overpowered your ${humanChoice}. Your vigor wanes.`;
        humanLives--;
    }

    lifeTextElement.textContent = `💀 Your Lives: ${humanLives} | Enemy Lives: ${computerLives} 💀`;
}
