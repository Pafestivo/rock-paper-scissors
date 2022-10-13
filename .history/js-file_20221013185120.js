function getComputerChoice() {
  const possibleChoices = ["Rock", "Paper", "Scissors"];

  const randomize = Math.floor(Math.random() * possibleChoices.length); 
  console.log(possibleChoices[randomize]);
}

getComputerChoice();