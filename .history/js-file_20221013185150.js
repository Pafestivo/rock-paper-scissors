function getComputerChoice() {
  const possibleChoices = ["Rock", "Paper", "Scissors"];

  const randomize = Math.floor(Math.random() * possibleChoices.length); 
  return(possibleChoices[randomize]);
}

getComputerChoice();