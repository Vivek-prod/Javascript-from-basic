const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const reset = document.getElementById("reset");

const choice = ["rock", "paper", "scissor"];

let scores = JSON.parse(localStorage.getItem("score")) || {
  player: 0,
  pc: 0,
  tie: 0,
};

update();

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
    } else if (randomchoice === "scissor") {
      result = "win";
    }
  }
  if (playermove === "paper") {
    if (randomchoice === "rock") {
      result = "win";
    } else if (randomchoice === "paper") {
      result = "tie";
    } else if (randomchoice === "scissor") {
      result = "lose";
    }
  }
  if (playermove === "scissor") {
    if (randomchoice === "rock") {
      result = "lose";
    } else if (randomchoice === "paper") {
      result = "win";
    } else if (randomchoice === "scissor") {
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

  update();
  Results(result);
  moves(playermove, randomchoice);

  // alert(`YOU CHOSE ${playermove}
  // COMPUTER CHOSE ${randomchoice}

  // YOU:${scores.player}
  // PC:${scores.pc}
  // TIE:${scores.tie}`);
  localStorage.setItem("score", JSON.stringify(scores));
  //
}

function update() {
  document.querySelector(".js-score").innerHTML = `
        YOU:${scores.player}
        PC:${scores.pc} 
        TIE:${scores.tie}`;
}

function Results(result) {
  document.querySelector(".js-result").innerHTML = result;
}

function moves(a, b) {
  document.querySelector(".js-moves").innerHTML = `you
        <img src="images/${a}.jfif" class="move-icon">
        <img src="images/${b}.jfif" class="move-icon">
        computer`;
}

reset.addEventListener("click", () => {
  scores.pc = 0;
  scores.player = 0;
  scores.tie = 0;
  localStorage.removeItem("score");
  alert(`GAME IS RESET

YOU:${scores.player} 
PC:${scores.pc} 
TIE:${scores.tie}`);
  update();
});
