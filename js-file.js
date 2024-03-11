const container = document.querySelector(".container");
const btn = document.querySelector(".start-button")

function createGrid(valueGrid) {
  const containerSize = parseInt(window.getComputedStyle(container).width);

  for (let i = 0; i < valueGrid; i++) {
    const row = document.createElement("div");
    row.classList.add("row-grid");

    for (let j = 0; j < valueGrid; j++) {
      const squareGrid = document.createElement("div");
      const widthAndHeight = containerSize / valueGrid;
      squareGrid.classList.add("square-grid");
      squareGrid.style.width = `${widthAndHeight}px`;
      squareGrid.style.height = `${widthAndHeight}px`;
      row.appendChild(squareGrid);
      squareGrid.addEventListener("mouseover" , () => {
        if (!squareGrid.classList.contains("painted"))
              squareGrid.style.backgroundColor = `rgb(${randomizerColor()} , ${randomizerColor()} , ${randomizerColor()})`
              squareGrid.classList.add("painted")
      })
        
    }
      
    container.appendChild(row);
  }
}

function randomizerColor() {
  return Math.floor(Math.random() * 256)
}

createGrid(16)

function validateInput() {
  const input = prompt("Enter a number between 4 and 100", "20")
  if(!Number(input)|| Number(input) > 100 || Number(input) < 4) {
    if (confirm("Enter a number between 4 and 100")) {
        validateInput()
    }
  }
  else container.innerHTML = "";
  createGrid(Number(input))
}
btn.addEventListener('click', (validateInput))




