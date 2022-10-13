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
  else {
    log = "ERROR! Please choose a valid value."
  }

  return log;
};


//game logic
function game() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {

    //player selection
    let playerInput = prompt("Rock, Paper, or Scissors ?");
    let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase(); //formatting the player input
    console.log("You: " + playerSelection);


    //computer selection
    function getComputerChoice() {
      const possibleChoices = ["Rock", "Paper", "Scissors"];
      const randomize = Math.floor(Math.random() * possibleChoices.length); 
      return(possibleChoices[randomize]);
    };
    let computerSelection = getComputerChoice();
    console.log("Computer: " + computerSelection);


    console.log(playRound(playerSelection, computerSelection));

    if(playRound() === "You lost this round!") {
      computerScore++;
    } else if (playRound() === "You won this round!") {
      playerScore++;
    }
    console.log("-- Scores: --");
    console.log("You: " + playerScore);
    console.log("Computer: " + computerScore);
  }

};

console.log(game());