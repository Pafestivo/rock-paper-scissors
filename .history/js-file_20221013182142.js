//make a function for the computer choice
function getComputerChoice() {
  let rps = ['Rock', 'Paper', 'Scissors'];

  let compChoice = rps[Math.floor(Math.random() * rps.length)];
  return compChoice;
}
//make a variable storing the computer choice
let compSelection = getComputerChoice();

//make a variable to store the player choice
let playerInput = prompt("Rock, Paper, Scissors?");
//make a variable to adjust any text to the same template
let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

//make a conditional function for game round to see who wins
function gameRound() {
  // rock > paper
  if (playerSelection === 'Rock' && compSelection === 'Paper') {
  console.log("You lose! Paper beats rock.")
  console.log("Computer chose " + compSelection + ".")
} else if (playerSelection === 'Paper' && compSelection === 'Rock') {
  console.log("You win! Paper beats rock.")
  console.log("Computer chose " + compSelection + ".")
  
  // paper > scissors
} else if (playerSelection === 'Paper' && compSelection === 'Scissors') {
  console.log("You lose! Scissors beats paper.")
  console.log("Computer chose " + compSelection + ".")
} else if (playerSelection === 'Scissors' && compSelection === 'Paper') {
  console.log("You win! Scissors beats paper.")
  console.log("Computer chose " + compSelection + ".")
  
  //rock > scissors
} else if (playerSelection === 'Scissors' && compSelection === 'Rock') {
  console.log("You lose! Rock beats scissors.")
  console.log("Computer chose " + compSelection + ".")
} else if (playerSelection === 'Rock' && compSelection === 'Scissors') {
  console.log("You win! Rock beats scissors.")
  console.log("Computer chose " + compSelection + ".")
  
  //draw
} else if (playerSelection === compSelection) {
  console.log("It's a draw!")
  console.log("Computer chose " + compSelection + ".")
} else {
  console.log("Not funny! Play by the rules!")
  console.log("The computer is displeased.")
}
}
//call the function
gameRound();
console.log("You chose " + playerSelection + ".");