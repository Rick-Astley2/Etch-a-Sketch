const grid = document.querySelector("#gridContainer");

function gridCreator(gridSize) {
  if (gridSize <= 100) {
    for (i = 0; i < gridSize; i++) {
      const divSquare = document.createElement("div");
      divSquare.classList.add("divSquare");
      divSquare.textContent = " ";
      
      divSquare.addEventListener("mouseover", () => divSquare.style.backgroundColor = "black");
      
      grid.appendChild(divSquare);
    }
  }
}


let gridSize = 16;
gridCreator(gridSize);


