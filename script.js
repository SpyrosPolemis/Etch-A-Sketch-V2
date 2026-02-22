const drawingBoard = document.querySelector("#drawing-board");
const numberOfSquares = 400;
for(let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.style.flexBasis=`${100 / Math.sqrt(numberOfSquares)}%`
    drawingBoard.appendChild(square)
}

const drawingSquares = document.querySelectorAll(".square");
drawingSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style["background-color"] = "black"
    })
})
