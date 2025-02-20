import dotenv from "dotenv";

console.log("script.js loaded");

const numbers = [1, 2, 3, 4];
let hasWon = [false, false, false, false];
let next = false;
let tries = 0;

const style1 = document.getElementsByClassName(`box-style1`);
const style2 = document.getElementsByClassName(`box-style2`);
const style3 = document.getElementsByClassName(`box-style3`);
const style4 = document.getElementsByClassName(`box-style4`);

function Reload() {
  tries++;
  for (let i = 0; i < numbers.length; i++) {
    const box = document.getElementById(`code-box-${numbers[i]}`);
    const styles = document.getElementsByClassName(`box-style${i + 1}`);
    if (box.innerHTML === "1") {
      continue;
    }
    const randomNumber = Math.floor(Math.random() * 10);
    box.innerHTML = randomNumber;
    if (randomNumber === 1 && !hasWon[i]) {
      console.log("you won");
      hasWon[i] = true;
    }

    if (hasWon[i]) {
      for (let j = 0; j < styles.length; j++) {
        styles[j].style.color = "green";
      }
    }
  }

  if (hasWon[0] && hasWon[1] && hasWon[2] && hasWon[3]) {
    console.log("You won the game!");
    next = true;
    for (let j = 0; j < style1.length; j++) {
      style1[j].style.backgroundColor = "green";
      style1[j].style.color = "white";
    }
    for (let j = 0; j < style2.length; j++) {
      style2[j].style.backgroundColor = "green";
      style2[j].style.color = "white";
    }
    for (let j = 0; j < style3.length; j++) {
      style3[j].style.backgroundColor = "green";
      style3[j].style.color = "white";
    }
    for (let j = 0; j < style4.length; j++) {
      style4[j].style.backgroundColor = "green";
      style4[j].style.color = "white";
    }

    document.getElementById("secret-quote").style.display = "block";
    document.getElementById(
      "tries-count"
    ).innerText = `Number of tries: ${tries}`;

    sendScore(tries);
  }
}

function sendScore(score) {
  const gameKey = "Louis_Hoed";
  const username = "Louis";

  const data = new URLSearchParams();
  data.append("game_key", gameKey);
  data.append("username", username);
  data.append("score", score);

  fetch("https://api.deweirdt.be/games/index.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data.toString(),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Score sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending score:", error);
    });
}
