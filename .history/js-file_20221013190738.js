

function playRound(playerSelection, computerSelection) {
let log = ""

return log;
};




//player selection
let playerInput = prompt("Rock, Paper, or Scissors ?");
let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase(); //formatting the player input
console.log("You: " + playerSelection + ".");


//computer selection
function getComputerChoice() {
  const possibleChoices = ["Rock", "Paper", "Scissors"];

  const randomize = Math.floor(Math.random() * possibleChoices.length); 
  return(possibleChoices[randomize]);
};
let computerSelection = getComputerChoice();
console.log("Computer: " + computerSelection + ".");

console.log(playRound(playerSelection, computerSelection));