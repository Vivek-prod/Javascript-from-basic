const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const reset = document.getElementById("reset");

const choice = ["rock", "paper", "scissors"];

let player = 0;
let pc = 0;
let tie = 0;

rock.addEventListener("click", () => {
  const randomchoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(randomchoice);
  if (randomchoice === "rock") {
    tie += 1;
    alert(`YOU CHOSE ROCK, COMPUTER CHOSE ROCK SO IT'S A TIE
YOU:${player} PC:${pc} TIE:${tie}`);
  } else if (randomchoice === "paper") {
    pc += 1;
    alert(`YOU CHOSE ROCK, COMPUTER CHOSE PAPER SO YOU LOSE
YOU:${player} PC:${pc} TIE:${tie}`);
  } else if (randomchoice === "scissors") {
    player += 1;
    alert(`YOU CHOSE ROCK, COMPUTER CHOSE SCISSOR SO YOU WIN
YOU:${player} PC:${pc} TIE:${tie}`);
  }
});

paper.addEventListener("click", () => {
  const randomchoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(randomchoice);
  if (randomchoice === "rock") {
    player += 1;
    alert(`YOU CHOSE PAPER , COMPUTER CHOSE ROCK SO YOU WIN
YOU:${player} PC:${pc} TIE:${tie}`);
  } else if (randomchoice === "paper") {
    tie += 1;
    alert(`YOU CHOSE PAPER , COMPUTER CHOSE PAPER SO IT'S A TIE
YOU:${player} PC:${pc} TIE:${tie}`);
  } else if (randomchoice === "scissors") {
    pc += 1;
    alert(`YOU CHOSE PAPER , COMPUTER CHOSE SCISSOR SO YOU LOSE
YOU:${player} PC:${pc} TIE:${tie}`);
  }
});

scissor.addEventListener("click", () => {
  const randomchoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(randomchoice);
  if (randomchoice === "rock") {
    pc += 1;
    alert(`YOU CHOSE SCISSOR , COMPUTER CHOSE ROCK SO YOU LOSE
YOU:${player} PC:${pc} TIE:${tie}`);
  } else if (randomchoice === "paper") {
    player += 1;
    alert(`YOU CHOSE SCISSOR , COMPUTER CHOSE PAPER SO YOU WIN
YOU:${player} PC:${pc} TIE:${tie}`);
  } else if (randomchoice === "scissors") {
    tie += 1;
    alert(`YOU CHOSE SCISSOR , COMPUTER CHOSE SCISSOR SO IT'S A TIE
YOU:${player} PC:${pc} TIE:${tie}`);
  }
});

reset.addEventListener("click", () => {
  pc = 0;
  player = 0;
  tie = 0;
  alert(`GAME IS RESET
YOU:${player} PC:${pc} TIE:${tie}`);
});
