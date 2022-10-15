let playerScore = 0;
let computerScore = 0;

const playerColumn = document.querySelector('.player');
const playerPoints = document.getElementById('player-points');

const computerColumn = document.querySelector('.comp');
const computerPoints = document.getElementById('computer-points');

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


  //finish the game at 5 points + show play again button
  const buttons = document.querySelectorAll('button');
  const playAgain = document.getElementById('play-again')
  if(playerScore === 5) {
    for(i = 0; i < buttons.length - 1; i++) {
      buttons[i].setAttribute("disabled", "disabled"); //disable buttons
      playAgain.classList.remove('hidden');
    }
    
    return "You won!";

  } else if (computerScore === 5) {
    for(i = 0; i < buttons.length - 1; i++) {
      buttons[i].setAttribute("disabled", "disabled");
      playAgain.classList.remove('hidden');
    }
    return "You lost!";
  }

  return log;
};

//variables to target the buttons
const rockChosen = document.querySelector('#rock'); 
const paperChosen = document.querySelector('#paper');
const scissorsChosen = document.querySelector('#scissors');


//computer selection
function getComputerChoice() {
  const possibleChoices = ["Rock", "Paper", "Scissors"];
  const randomize = Math.floor(Math.random() * possibleChoices.length); 
  let selected = possibleChoices[randomize];

  if(document.querySelector('button #robot') != null) { //checks to see if robot icon already exists
    const robotIcon = document.getElementById('robot');
    const parent = document.getElementById('robot').parentElement;
    parent.removeChild(robotIcon); //remove the icon if it exists
  } 

  if (selected === "Rock") {
    rockChosen.insertAdjacentHTML('beforeend', '<i id="robot" class="fa-solid fa-robot comp-choice"></i>'); //adds robot icon
  
  } else if (selected === "Paper") {
    paperChosen.insertAdjacentHTML('beforeend', '<i id="robot" class="fa-solid fa-robot comp-choice"></i>');
  
  } else if (selected === "Scissors") {
    scissorsChosen.insertAdjacentHTML('beforeend', '<i id="robot" class="fa-solid fa-robot comp-choice"></i>');
  }

  return selected;
};


//adding the round result paragraph to the page
const results = document.querySelector('#results');
const para = document.createElement('p');
para.classList.add('round-result');


//function for event listeners
function rockRound() {

  if(document.querySelector('button #human') != null) { //checks to see if human icon already exists
    const humanIcon = document.getElementById('human');
    const parent = document.getElementById('human').parentElement;
    parent.removeChild(humanIcon); //remove the icon if it exists
  } 

  rockChosen.insertAdjacentHTML('beforeend', '<i id="human" class="fa-solid fa-person player-choice"></i>'); //adds human icon
  
  let computerSelection = getComputerChoice();

  let roundResult = playRound("Rock", computerSelection);

  para.textContent = roundResult;
  results.appendChild(para);
};

function paperRound() {
  let computerSelection = getComputerChoice();

  if(document.querySelector('button #human') != null) { //checks to see if human icon already exists
    const humanIcon = document.getElementById('human');
    const parent = document.getElementById('human').parentElement;
    parent.removeChild(humanIcon); //remove the icon if it exists
  } 

  paperChosen.insertAdjacentHTML('beforeend', '<i id="human" class="fa-solid fa-person player-choice"></i>'); //adds human icon
  
  para.textContent = playRound("Paper", computerSelection);
  results.appendChild(para);
};

function scissorsRound() {
  let computerSelection = getComputerChoice();

  if(document.querySelector('button #human') != null) { //checks to see if human icon already exists
    const humanIcon = document.getElementById('human');
    const parent = document.getElementById('human').parentElement;
    parent.removeChild(humanIcon); //remove the icon if it exists
  } 

  scissorsChosen.insertAdjacentHTML('beforeend', '<i id="human" class="fa-solid fa-person player-choice"></i>'); //adds human icon

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



