const choices = ["rock", "paper", "scissor"];
let computerHand;
let playerHand;
// elements
let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
// result
let resultPlayer = document.querySelector("#resultPlayer");
let resultComputer = document.querySelector("#resultComputer");

let playerRock = document.querySelector(".rock");
let playerPaper = document.querySelector(".paper");
let playerScissor = document.querySelector(".scissor");

let computerRock = document.getElementById("computerRock");
let computerPaper = document.getElementById("computerPaper");
let computerScissor = document.getElementById("computerScissor");
const computerChoice = [computerRock, computerPaper, computerScissor];
// computer hand generator
function randomizer() {
  let num = Math.floor(Math.random() * (3 - 1 + 1));
  console.log(computerChoice[num]);
  computerChoice[num].style.scale = "1.2";
  return choices[num];
}
// rock hand
function rock() {
  computerHand = randomizer();
  playerHand = choices[0];
  resultComputer.style.display = "block";
  resultPlayer.style.display = "block";
  if (playerHand === computerHand) {
    console.log("draw!");
    console.log(playerHand + "===" + computerHand);
    resultComputer.textContent = "DRAW!";
    resultPlayer.textContent = "DRAW!";
  } else if (computerHand === choices[1]) {
    console.log("you lose");
    console.log(playerHand + "!===" + computerHand);
    computerScore.textContent++;
    resultComputer.textContent = "AI WIN!";
    resultPlayer.textContent = "You LOSE!";
  } else if (computerHand === choices[2]) {
    console.log("you win");
    console.log(playerHand + "!===" + computerHand);
    playerScore.textContent++;
    resultComputer.textContent = "AI LOSE";
    resultPlayer.textContent = "You WIN";
  }
}

function paper() {
  computerHand = randomizer();
  playerHand = choices[1];
  resultComputer.style.display = "block";
  resultPlayer.style.display = "block";
  if (playerHand === computerHand) {
    console.log("draw!");
    console.log(playerHand + "===" + computerHand);
    resultComputer.textContent = "DRAW!";
    resultPlayer.textContent = "DRAW!";
  } else if (computerHand === choices[2]) {
    console.log("you lose");
    console.log(playerHand + "!===" + computerHand);
    computerScore.textContent++;
    resultComputer.textContent = "AI WIN!";
    resultPlayer.textContent = "You LOSE!";
  } else if (computerHand === choices[0]) {
    console.log("you win");
    console.log(playerHand + "!===" + computerHand);
    playerScore.textContent++;
    resultComputer.textContent = "AI LOSE!";
    resultPlayer.textContent = "You WIN";
  }
}
function scissor() {
  computerHand = randomizer();
  playerHand = choices[2];
  resultComputer.style.display = "block";
  resultPlayer.style.display = "block";
  if (playerHand === computerHand) {
    console.log("draw!");
    console.log(playerHand + "===" + computerHand);
    resultComputer.textContent = "DRAW!";
    resultPlayer.textContent = "DRAW!";
  } else if (computerHand === choices[0]) {
    console.log("you lose");
    console.log(playerHand + "!===" + computerHand);
    computerScore.textContent++;
    resultComputer.textContent = "AI WIN!";
    resultPlayer.textContent = "You LOSE!";
  } else if (computerHand === choices[1]) {
    console.log("you win");
    console.log(playerHand + "!===" + computerHand);
    playerScore.textContent++;
    resultComputer.textContent = "AI LOSE!";
    resultPlayer.textContent = "You WIN";
  }
}
