// Target the main grid container and style it.
const grid = document.querySelector(".container");
grid.style.width = "592px";
grid.style.height = "592px";
grid.style.margin = "20px";
grid.style.border = "15px solid hsl(0, 0%, 67%)"
grid.style.borderRadius = "10px";

function etchSketch(userChoice) {
  // Use a nested loop to create the grid cells.
  for (let i = 0; i < userChoice; i++) { // for loop for rows
    for (let j = 0; j < userChoice; j++) { // for loop for columns
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
      cell.style.width = (592 / userChoice - 2) + "px";
      cell.style.height = (592 / userChoice - 2) + "px";
      cell.style.border = "1px solid hsl(0, 0%, 67%)";
      cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "hsl(217, 100%, 61%)";  
      });
    }
  };
};

// function resetSketch() {
//   const container = document.querySelector(".container");
//   if (container) {
//     container.remove();
//   }
// };

// Target the sketch button and style it.
const sketchBtn = document.querySelector("#sketchBtn");
sketchBtn.textContent = "Create sketch";
sketchBtn.addEventListener("click", () => {
  let userChoice = prompt("Select the number of squares per side:");
  if (userChoice > 99 || userChoice === "") {
    return;
  } else {
    etchSketch(userChoice);
  }
});

const randomColor = document.querySelector("#randomColor");
randomColor.textContent = "Random color";
const eraser = document.querySelector("#eraser");
eraser.textContent = "Eraser";
const clearGrid = document.querySelector("#clearGrid");
clearGrid.textContent = "Clear grid"