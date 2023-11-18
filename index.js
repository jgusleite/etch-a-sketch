const container = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear");
const gridSizeBtn = document.querySelector(".grid-size");

let grid = null;
let gridWidth = 8;
let gridHeight = 8;

clearBtn.addEventListener("click", (e) => {
  clearGrid();
});

gridSizeBtn.addEventListener("click", (e) => {
  setGridSize();
});

function createGrid() {
  let containerWidth = container.clientWidth;
  let containerHeight = container.clientHeight;

  for (let i = 0; i < gridWidth * gridHeight; i++) {
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.width = `${containerWidth / gridWidth}px`;
    div.style.height = `${containerHeight / gridHeight}px`;
    container.appendChild(div);
  }
}

function updateGrid() {
  grid = document.querySelectorAll(".grid-container > div");
  grid.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      item.style.backgroundColor = "black";
    });
  });
}

function setGridSize() {
  let size = +prompt("Size [8, 64]: ");

  if (size % 8 !== 0 || size > 64) {
    return alert("Invalid Size!");
  }

  gridWidth = size;
  gridHeight = size;
  deleteGrid();
  createGrid();
  updateGrid();
}

function clearGrid() {
  grid.forEach((item) => {
    item.style.backgroundColor = "white";
  });
}

function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

createGrid();
updateGrid();
