/** @format */

"use strict";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "my name is himanshu sharma";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".score").textContent = 32330;
// console.log(document.querySelector(".score").textContent);

// document.querySelector(".highscore").textContent = 4939439;
// console.log(document.querySelector(".highscore").textContent);

// document.querySelector(".guess").value = 20;
// console.log(document.querySelector(".guess").textContent);

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);

//   console.log(guess, typeof guess);

//   if (!guess) {
//   }
// });

const secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretnumber;

let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  score = 0;

  document.querySelector(".score").textContent = 0;
  document.querySelector("body").style.backgroundColor = "#222";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "Correct answer";
    document.querySelector("body").style.backgroundColor = "#60b347";

    score++;

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore ").textContent = highscore;
  } else if (guess > secretnumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  } else if (guess < secretnumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
    }
  }
});
