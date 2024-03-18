function etchSketch(userChoice) {
  // Target the main grid container and style it.
  const grid = document.querySelector(".container");
  grid.style.width = (userChoice * 32) + "px";
  grid.style.height = (userChoice * 32) + "px";
  grid.style.margin = "20px";

  // Use a nested loop to create the grid cells.
  for (let i = 0; i < userChoice; i++) { // loop 16 times for rows
    for (let j = 0; j < userChoice; j++) { // loop 16 times for columns
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
      cell.style.width = "30px";
      cell.style.height = "30px";
      cell.style.border = "1px solid black";
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "gray";  
      });
    }
  };
};

// Target the reset button and style it.
const btn = document.querySelector("#btn");
btn.textContent = "Create sketch";
btn.addEventListener("click", () => {
  let userChoice = prompt("Select the number of squares per side:");
  if (userChoice > 20) {
    return;
  } else {
    etchSketch(userChoice);
  }
});