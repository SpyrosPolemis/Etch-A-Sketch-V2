const drawingBoard = document.querySelector("#drawing-board");
const numberOfSquares = 144;
for(let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.style.flexBasis=`${100 / Math.sqrt(numberOfSquares)}%`
    drawingBoard.appendChild(square)
}
