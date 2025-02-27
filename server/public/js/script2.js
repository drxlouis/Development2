const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

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
  if (
    document.getElementById("number-1").innerHTML === "1" &&
    document.getElementById("number-2").innerHTML === "7" &&
    document.getElementById("number-3").innerHTML === "8" &&
    document.getElementById("number-4").innerHTML === "5"
  ) {
    alert("You won!");
  } else {
    alert("Not correct!");
  }
}
