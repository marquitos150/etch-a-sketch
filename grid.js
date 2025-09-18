const resize = document.querySelector(".resize");
const grid = document.querySelector(".grid");
const clearBtn = document.querySelector(".clear");

function createGrid(d = 16) {
    grid.innerHTML = "";
    for (let i = 0; i < d; i++) {
        const rowGrid = document.createElement("div");
        rowGrid.classList.add("row-grid");
        for (let j = 0; j < d; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            rowGrid.appendChild(square);
        }
        grid.appendChild(rowGrid);
    }
}

createGrid();

resize.addEventListener("click", () => {
    const input = prompt("Enter a number from 1-100 for your custom grid size in pixels (default: 16x16).");
    const d = Number(input);
    if (input == null || input.length == 0
        || !Number.isInteger(d) || d < 1 || d > 100) {
        return;
    }

    createGrid(d);
});

grid.addEventListener("mouseover", (e) => {
    if (e.target.classList[0] == "square") {
        e.target.style.backgroundColor = "black";
        e.target.style.borderColor = "black";
    }
});