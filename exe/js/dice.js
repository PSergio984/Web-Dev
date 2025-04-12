

function rollDice(){

    const numOfDice= document.getElementById('numOfDice').value;
    const diceResult =  document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImage');
    const value =[];
    const images = [];
    
    for(let i = 0; i < numOfDice; i++){
        const diceValue = Math.floor(Math.random()*6)+1;
        value.push(diceValue);
        images.push(`<img src="../images/${diceValue}.png">`);
    }
    diceResult.textContent= `dice: ${value.join(", ")}`;
    diceImages.innerHTML = images.join('');


}