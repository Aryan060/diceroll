// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");
// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    Btn1Clicked();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  let a = 1;
  while (a <= 5) {
    // Random Dice Roll & Total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);

    a += 1;
  }
}

document.getElementById("go-btn1").addEventListener("click", Btn1Clicked);
function Btn1Clicked() {
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";
  let b = 0;
  let search = +document.getElementById("search-in").value;
  while (b < search) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
    b += 1;
    if (`${total}` <= 2) {
      console.log("rolled snake eyes");
    } else if (`${total}` >= 12) {
      console.log("rolled double 6");
    }
  }
}

function snakeEyes() {
  let count = 0;
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";
  while (true) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);

    // Snake Eyes
    if (total === 2) {
      break;
    } else {
      count = count + 1;
    }
  }
  document.getElementById("SE").innerHTML = count + 1;
}
