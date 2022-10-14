let playerScore = 0;
let computerScore = 0;

const playerColumn = document.querySelector('.player');
const playerPoints = document.getElementById('player-points');

const computerColumn = document.querySelector('.comp');
const computerPoints = document.getElementById('computer-points');

const buttons = document.querySelectorAll('button');

//round logic
function playRound(playerSelection, computerSelection) {

  let log = ""


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
    log = "This round ends in a draw!"
  } 

  playerPoints.textContent = playerScore;

  computerPoints.textContent = computerScore;

  //finish the game at 5 points
  if(playerScore === 5) {
    for(i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("disabled", "disabled");
    }
    return "You won!";

  } else if (computerScore === 5) {
    for(i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("disabled", "disabled");
    }
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
  let selected = possibleChoices[randomize];


  if(selected === "Rock") {
    if(document.querySelector('button #robot') != null) {
      console.log("yey");
    }
  }



  return selected;
};


//adding the round result paragraph to the page
const results = document.querySelector('#results');
const para = document.createElement('p');
para.classList.add('round-result');


//function for event listeners
function rockRound() {
  
  let computerSelection = getComputerChoice();
  console.log(computerSelection);

  let roundResult = playRound("Rock", computerSelection);

  para.textContent = roundResult;
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
//end of event listeners functions


//adding event listeners to each button
const rock = document.querySelector('#rock');
rock.addEventListener("click", rockRound);

const paper = document.querySelector('#paper');
paper.addEventListener("click", paperRound);

const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", scissorsRound);



