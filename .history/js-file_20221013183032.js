//make a function for the computer choice
function getComputerChoice() {
  let rps = ['Rock', 'Paper', 'Scissors'];

  let compChoice = rps[Math.floor(Math.random() * rps.length)];
  return compChoice;
}
//make a variable storing the computer choice
let compSelection = getComputerChoice();

//make a conditional function for game round to see who wins
function gameRound(playerSelection, compSelection) {

//make a variable to store the player choice
let playerInput = prompt("Rock, Paper, Scissors?");
//make a variable to adjust any text to the same template
playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
  return playerSelection;
}

console.log(gameRound());