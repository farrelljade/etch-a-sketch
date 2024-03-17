const grid = document.querySelector(".grid");

// Use a nested loop to create the grid cells
for (let i = 0; i < 16; i++) { // loop 16 times for rows
  for (let j = 0; j < 16; j++) { // loop 16 times for columns
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "gray";  
    });
  }
};
