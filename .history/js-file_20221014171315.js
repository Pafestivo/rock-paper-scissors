let playerScore = 0;
let computerScore = 0;


//round logic
function playRound(playerSelection, computerSelection) {
  let log = ""

  if(playerScore == 5 || computerScore == 5) {
    document.querySelectorAll("button").disabled = true;
  }

  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
    log = "You lost this round!"
    computerScore++
  } 
  else if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")    
  ) {
    log = "You won this round!"
    playerScore++
  } 
  else if (
    (playerSelection === computerSelection)    
  ) {
    log = "This round is a draw!"
  } 

  if(playerScore === 5) {
    return "You won!";
  } else if (computerScore === 5) {
    return "You lost!";
  }

  console.log(playerScore);
  console.log(computerScore);
  return log;
};

//computer selection
function getComputerChoice() {
  const possibleChoices = ["Rock", "Paper", "Scissors"];
  const randomize = Math.floor(Math.random() * possibleChoices.length); 
  return(possibleChoices[randomize]);
};


const results = document.querySelector('#results');
const para = document.createElement('p');
para.classList.add('round-result');


//function for each player selection
function rockRound() {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);

  let roundResult = playRound("Rock", computerSelection);

  para.textContent = roundResult;
  results.appendChild(para);
  return roundResult;
};


function paperRound() {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);
  
  para.textContent = playRound("Paper", computerSelection);
  results.appendChild(para);
};

function scissorsRound() {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);

  para.textContent = playRound("Scissors", computerSelection);
  results.appendChild(para);
};
//end of player selection functions


//adding event listeners to each button
const rock = document.querySelector('#rock');
rock.addEventListener("click", rockRound);

const paper = document.querySelector('#paper');
paper.addEventListener("click", paperRound);

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", scissorsRound);



