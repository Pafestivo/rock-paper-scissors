function getComputerChoice() {
  const possibleChoices = ["Rock", "Paper", "Scissors"];

  const randomize = Math.floor(Math.random() * possibleChoices.length); 
  return(possibleChoices[randomize]);
};

function playRound(playerSelection, computerSelection) {

};

let playerInput = prompt("Rock, Paper, or Scissors ?");

let playerSelection = playerInput.charAt(0);
console.log(playerSelection);