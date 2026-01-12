const grid = document.querySelector("#gridContainer");

function gridCreator(gridSize) {
  if (gridSize <= 100) {
    for (j = 0; j < gridSize; j++) {
      const rowGrid = document.createElement("div");
      for (i = 0; i < gridSize; i++) {
        const divSquare = document.createElement("div");
        divSquare.classList.add("divSquare");
        divSquare.textContent = " ";

        divSquare.addEventListener(
          "mouseover",
          () => (divSquare.style.backgroundColor = "black"),
        );

        rowGrid.appendChild(divSquare);
      }
      grid.appendChild(rowGrid)
    }
  }
}

let gridSize = 16;
gridCreator(gridSize);
