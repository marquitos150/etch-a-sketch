const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    const rowGrid = document.createElement("div");
    rowGrid.classList.add("row-grid");
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        rowGrid.appendChild(square);
    }
    grid.appendChild(rowGrid);
}

const allSquares = document.querySelectorAll(".square");
allSquares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
        square.style.borderColor = "black";
    });
});