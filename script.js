const grid = document.querySelector("#gridContainer");
const submitBtn = document.querySelector("#submitBtn");
const input = document.querySelector("input");

function submit(e) {
  e.preventDefault();

  let size = Number(input.value);

  if (size > 0 && size <= 100) {
    grid.innerHTML = "";
    gridCreator(size);
  }
  input.value = "";
  input.focus();
}

function gridCreator(gridSize) {
  if (gridSize <= 100) {
    for (let j = 0; j < gridSize; j++) {
      const rowGrid = document.createElement("div");
      rowGrid.classList.add("rowGrid")
      let squareSize = 940 / gridSize;
      for (let i = 0; i < gridSize; i++) {
        const divSquare = document.createElement("div");
        divSquare.classList.add("divSquare");
        divSquare.textContent = "";
        divSquare.style.width = `${squareSize}px`;
        divSquare.style.height = `${squareSize}px`;

        divSquare.addEventListener(
          "mouseover",
          () => (divSquare.style.backgroundColor = "black"),
        );

        rowGrid.appendChild(divSquare);
      }
      grid.appendChild(rowGrid);
    }
  }
}

gridCreator(16);
submitBtn.addEventListener("click", submit);
