console.log("Tip: verstopt in de css en niet-zichtbaar.");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let tries = 0;

function createIncrementFunction(elementId) {
  let index = 0;
  return function () {
    document.getElementById(elementId).innerHTML = numbers[index];
    index = (index + 1) % numbers.length;
  };
}

const one = createIncrementFunction("number-1");
const two = createIncrementFunction("number-2");
const three = createIncrementFunction("number-3");
const four = createIncrementFunction("number-4");

async function checkScore() {
  tries++;
  if (
    document.getElementById("number-1").innerHTML === "1" &&
    document.getElementById("number-2").innerHTML === "7" &&
    document.getElementById("number-3").innerHTML === "8" &&
    document.getElementById("number-4").innerHTML === "5"
  ) {
    alert("You won!");
    document.getElementById("secret-quote").style.display = "block";
    document.getElementById("tries-count").innerText = `Number of tries: ${tries}`;
    sendScore(tries);
  } else {
    alert("Not correct!");
    document.getElementById("tries-count").innerText = `Number of tries: ${tries}`;
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