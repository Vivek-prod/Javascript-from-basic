const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const reset = document.getElementById("reset");

const choice = ["rock", "paper", "scissors"];

const scores = JSON.parse(localStorage.getItem("score"));

rock.addEventListener("click", () => {
  playGame("rock");
});

paper.addEventListener("click", () => {
  playGame("paper");
});

scissor.addEventListener("click", () => {
  playGame("scissor");
});

function playGame(playermove) {
  const randomchoice = choice[Math.floor(Math.random() * choice.length)];
  let result = "";

  if (playermove === "rock") {
    if (randomchoice === "rock") {
      result = "tie";
    } else if (randomchoice === "paper") {
      result = "lose";
    } else if (randomchoice === "scissors") {
      result = "win";
    }
  }
  if (playermove === "paper") {
    if (randomchoice === "rock") {
      result = "win";
    } else if (randomchoice === "paper") {
      result = "tie";
    } else if (randomchoice === "scissors") {
      result = "lose";
    }
  }
  if (playermove === "scissor") {
    if (randomchoice === "rock") {
      result = "lose";
    } else if (randomchoice === "paper") {
      result = "win";
    } else if (randomchoice === "scissors") {
      result = "tie";
    }
  }

  if (result === "lose") {
    scores.pc += 1;
  } else if (result === "win") {
    scores.player += 1;
  } else if (result === "tie") {
    scores.tie += 1;
  }
  alert(`YOU CHOSE ${playermove}
COMPUTER CHOSE ${randomchoice} 

${result}

YOU:${scores.player}
PC:${scores.pc} 
TIE:${scores.tie}`);
  localStorage.setItem("score", JSON.stringify(scores));
}

reset.addEventListener("click", () => {
  scores.pc = 0;
  scores.player = 0;
  scores.tie = 0;
  alert(`GAME IS RESET

YOU:${scores.player} 
PC:${scores.pc} 
TIE:${scores.tie}`);
});
