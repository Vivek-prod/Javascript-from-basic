const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const choice = ["rock", "paper", "scissors"];

rock.addEventListener("click", () => {
  const randomchoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(randomchoice);
  if (randomchoice == "rock") {
    alert(`YOU CHOSE ROCK, COMPUTER CHOSE ROCK SO IT'S A TIE`);
  } else if (randomchoice == "paper") {
    alert("YOU CHOSE ROCK, COMPUTER CHOSE PAPER SO YOU LOSE");
  } else if (randomchoice == "scissors") {
    alert("YOU CHOSE ROCK, COMPUTER CHOSE SCISSOR SO YOU WIN");
  }
});

paper.addEventListener("click", () => {
  const randomchoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(randomchoice);
  if (randomchoice == "rock") {
    alert(`YOU CHOSE PAPER , COMPUTER CHOSE ROCK SO YOU WIN`);
  } else if (randomchoice == "paper") {
    alert("YOU CHOSE PAPER , COMPUTER CHOSE PAPER SO IT'S A TIE");
  } else if (randomchoice == "scissors") {
    alert("YOU CHOSE PAPER , COMPUTER CHOSE SCISSOR SO YOU LOSE");
  }
});

scissor.addEventListener("click", () => {
  const randomchoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(randomchoice);
  if (randomchoice == "rock") {
    alert(`YOU CHOSE SCISSOR , COMPUTER CHOSE ROCK SO YOU LOSE`);
  } else if (randomchoice == "paper") {
    alert("YOU CHOSE SCISSOR , COMPUTER CHOSE PAPER SO YOU WIN");
  } else if (randomchoice == "scissors") {
    alert("YOU CHOSE SCISSOR , COMPUTER CHOSE SCISSOR SO IT'S A TIE");
  }
});
