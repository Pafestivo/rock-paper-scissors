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

  return log;
};

//computer selection
function getComputerChoice() {
  const possibleChoices = ["Rock", "Paper", "Scissors"];
  const randomize = Math.floor(Math.random() * possibleChoices.length); 
  return(possibleChoices[randomize]);
};


const results = document.querySelector('#results');


//function for each player selection
function rockRound() {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);

  const para = document.createElement('p');
  para.classList.add('round-result');
  para.textContent = playRound("Rock", computerSelection);
  results.appendChild(para);
  
  if (result = "You lost this round!") {
    return "lost";
  } else if (result = "You won this round!") {
    return "won";
  } else {
    return "draw";
  }
};
console.log(rockRound());

function paperRound() {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);
  
  const para = document.createElement('p');
  para.classList.add('round-result');
  para.textContent = playRound("Rock", computerSelection);
  results.appendChild(para);
};

function scissorsRound() {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);

  const para = document.createElement('p');
  para.classList.add('round-result');
  para.textContent = playRound("Rock", computerSelection);
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
  
  let result = rockRound()
}

