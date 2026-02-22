const drawingBoard = document.querySelector("#drawing-board");
for(let i = 0; i < 100; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    drawingBoard.appendChild(square)
}
