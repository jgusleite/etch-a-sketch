const container = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear");
const gridSizeBtn = document.querySelector(".grid-size");
const rainbowModeBtn = document.querySelector(".rainbow-mode");

let grid = null;
let gridWidth = 8;
let gridHeight = 8;
let rainbowMode = false;

clearBtn.addEventListener("click", (e) => {
  clearGrid();
});

gridSizeBtn.addEventListener("click", (e) => {
  setGridSize();
});

rainbowModeBtn.addEventListener("click", (e) => {
  rainbowMode = !rainbowMode;

  if (rainbowMode) {
    rainbowModeBtn.style.background = `linear-gradient( 90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%)`;
  } else {
    rainbowModeBtn.style.background = "#fff";
  }
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
      if (!rainbowMode) item.style.backgroundColor = "black";
      else {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let color = `rgb(${r}, ${g}, ${b})`;
        item.style.backgroundColor = color;
      }
    });
  });
}

function setGridSize() {
  let size = +prompt("Size [1, 64]: ");
  if (size == 0) size = 1;

  if (size > 64) {
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
