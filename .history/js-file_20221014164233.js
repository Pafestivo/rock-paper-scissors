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
    (playerSelection === computerSelection)    
  ) {
    log = "This round is a draw!"
  } 

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

  para.textContent = playRound("Rock", computerSelection);
  results.appendChild(para);
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


function game() {

  console.log(para.toString().search("won"));
}

