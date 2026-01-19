const mode = document.querySelector("#modes");
const reset = document.querySelector("#reset");
const grid = document.querySelector("#gridContainer");
const submitBtn = document.querySelector("#submitBtn");
const input = document.querySelector("input");

function getRndColor() {
  let symbols = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

function fade() {
  alpha -= 0.1;
  if (alpha < 0) alpha = 1;

  let color = `rgba(0,0,0, ${alpha})`;

  return color;
}

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
      rowGrid.classList.add("rowGrid");
      let squareSize = 940 / gridSize;
      for (let i = 0; i < gridSize; i++) {
        const divSquare = document.createElement("div");
        divSquare.classList.add("divSquare");
        divSquare.textContent = "";
        divSquare.style.width = `${squareSize}px`;
        divSquare.style.height = `${squareSize}px`;

        if (mode.value === "normal") {
          divSquare.addEventListener(
            "mouseover",
            () => (divSquare.style.backgroundColor = "black"),
          );
        } else if (mode.value === "random") {
          divSquare.addEventListener(
            "mouseover",
            () => (divSquare.style.backgroundColor = getRndColor()),
          );
        } else if (mode.value === "reduce") {
          divSquare.addEventListener(
            "mouseover",
            () => (divSquare.style.backgroundColor = fade()),
          );
        }

        rowGrid.appendChild(divSquare);
      }
      grid.appendChild(rowGrid);
    }
  }
}

let alpha = 1;
gridCreator(16);
submitBtn.addEventListener("click", submit);