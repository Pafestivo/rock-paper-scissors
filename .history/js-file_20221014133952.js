//round logic
function playRound(playerSelection, computerSelection) {
  let log = ""

  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
    log = "You lost this round!"
  } 
  else if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")    
  ) {
    log = "You won this round!"
  } 
  else if (
    (playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors")    
  ) {
    log = "This round is a draw!"
  } 
  else { //input doesn't match rock, paper, or scissors.
    log = "ERROR! Please choose a valid value."
  }

  return log;
};

  //computer selection
  function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    const randomize = Math.floor(Math.random() * possibleChoices.length); 
    return(possibleChoices[randomize]);
  };


//function for each player selection
function rockRound() {
  console.log("Computer: " + getComputerChoice());
  console.log(playRound("Rock", getComputerChoice()));
};

function paperRound() {
  console.log(playRound("Paper", getComputerChoice()));
};

function scissorsRound() {
  console.log(playRound("Scissors", getComputerChoice()));
};


const rock = document.querySelector('#rock');
rock.addEventListener("click", rockRound);

const paper = document.querySelector('#paper');
paper.addEventListener("click", paperRound);

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", scissorsRound);


