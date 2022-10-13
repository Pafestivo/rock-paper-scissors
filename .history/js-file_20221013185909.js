function getComputerChoice() {
  const possibleChoices = ["Rock", "Paper", "Scissors"];

  const randomize = Math.floor(Math.random() * possibleChoices.length); 
  return(possibleChoices[randomize]);
};

function playRound(playerSelection, computerSelection) {

};

const playerInput = prompt("Rock, Paper, or Scissors ?");

const playerSelection = playerInput.toUpperCase.charAt(1) + playerInput.substring(1).toLowerCase;
console.log(playerSelection);