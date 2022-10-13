function gameRound(playerSelection, compSelection) {  //make a conditional function for game round to see who wins

  function getComputerChoice() {  //make a function for the computer choice
    let rps = ['Rock', 'Paper', 'Scissors'];

    let computerChoice = rps[Math.floor(Math.random() * rps.length)];
    return computerChoice;
  }
  compSelection = getComputerChoice();

  let playerInput = prompt("Rock, Paper, Scissors?");
  //make a variable to adjust any text to the same template
  playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase(); 
  return playerSelection;

}

gameRound();
  