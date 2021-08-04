const choices = ["rock", "paper", "scissor"];
let computerHand;
let playerHand;
// elements
let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
// result
let resultPlayer = document.querySelector("#resultPlayer");
let resultComputer = document.querySelector("#resultComputer");

let playerRock = document.querySelector("#rock");
let playerPaper = document.querySelector("#paper");
let playerScissor = document.querySelector("#scissor");

let computerRock = document.getElementById("computerRock");
let computerPaper = document.getElementById("computerPaper");
let computerScissor = document.getElementById("computerScissor");

let computerDisplay = document.getElementById("computerDisplay");
let playerDisplay = document.getElementById("playerDisplay");
// dialogues
const winDialogue = [
  "Nice!, You Are Good At This!",
  "You know Janken Keeen!?",
  "Plus Ultraaa",
  "I must Ask my Creator to BUFF my SKILLS",
];
const loseDialogue = [
  "Trash",
  "Execute Code 66!",
  "Dude You are trash!",
  "Look at you, you piece of tainted MEAT!",
];
let dialogueCon = document.querySelector(".dialogue-con");
let dialogue = document.querySelector("#dialogue");

// computer hand generator
function randomizer() {
  let num = Math.floor(Math.random() * (3 - 1 + 1));
  if (choices[num] === choices[0]) {
    computerDisplay.style.backgroundImage = "url(img/rock.png)";
    console.log("rock");
  } else if (choices[num] === choices[1]) {
    computerDisplay.style.backgroundImage = "url(img/paper.png)";
    console.log("paper");
  } else {
    computerDisplay.style.backgroundImage = "url(img/scissors.png)";
    console.log("paper");
  }
  return choices[num];
}
// rock hand
function rock() {
  computerHand = randomizer();
  playerHand = choices[0];
  resultComputer.style.display = "block";
  resultPlayer.style.display = "block";
  playerDisplay.style.display = "flex";
  computerDisplay.style.display = "flex";

  playerDisplay.style.backgroundImage = "url(img/rock.png)";

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
  dialogueTab();
}

function paper() {
  computerHand = randomizer();
  playerHand = choices[1];
  resultComputer.style.display = "block";
  resultPlayer.style.display = "block";
  playerDisplay.style.display = "flex";
  computerDisplay.style.display = "flex";
  playerDisplay.style.backgroundImage = "url(img/paper.png)";

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
  dialogueTab();
}
function scissor() {
  computerHand = randomizer();
  playerHand = choices[2];
  resultComputer.style.display = "block";
  resultPlayer.style.display = "block";
  playerDisplay.style.display = "flex";
  computerDisplay.style.display = "flex";
  playerDisplay.style.backgroundImage = "url(img/scissors.png)";

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
  dialogueTab();
}

function dialogueTab() {
  let num = Math.floor(Math.random() * (4 - 1 + 1));
  let playerScoreInt = parseInt(playerScore.textContent);
  let computerScoreInt = parseInt(computerScore.textContent);
  console.log(playerScoreInt);
  if (playerScoreInt === 5) {
    dialogueCon.style.display = "flex";
    dialogue.textContent = winDialogue[num];
    playerRock.style.pointerEvents = "none";
    playerPaper.style.pointerEvents = "none";
    playerScissor.style.pointerEvents = "none";
  } else if (computerScoreInt === 5) {
    dialogueCon.style.display = "flex";
    dialogue.textContent = loseDialogue[num];
    playerRock.style.pointerEvents = "none";
    playerPaper.style.pointerEvents = "none";
    playerScissor.style.pointerEvents = "none";
  }
}

function playAgain() {
  computerScore.textContent = 0;
  playerScore.textContent = 0;
  playerRock.style.pointerEvents = "auto";
  playerPaper.style.pointerEvents = "auto";
  playerScissor.style.pointerEvents = "auto";
  resultComputer.style.display = "none";
  resultPlayer.style.display = "none";
  playerDisplay.style.display = "none";
  computerDisplay.style.display = "none";
  dialogueCon.style.display = "none";
}
