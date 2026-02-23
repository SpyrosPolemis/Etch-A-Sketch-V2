// Dynamically create drawing board grid
const drawingBoard = document.querySelector("#drawing-board");
const numberOfSquares = 400;
for(let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    square.style.flexBasis=`${100 / Math.sqrt(numberOfSquares)}%`
    drawingBoard.appendChild(square)
}

let currectColor = "black"
let mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}
 
// Drawing
const drawingSquares = document.querySelectorAll(".square");
drawingSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        if (mouseDown) {
                square.style["background-color"] = currectColor
                console.log(currectColor)
        }
        if(square.style.backgroundColor == currectColor) {
            let opacity = Number(square.style["opacity"])
            opacity += 0.2
            square.style["opacity"] = opacity
        }
    })
})

// Clear button
const clearBtn = document.querySelector("#clear-btn")
clearBtn.onclick = () => {
    drawingSquares.forEach((square) => {
        square.style["opacity"] = 0
        square.style["background-color"] = "black"
    })
}

// Color Pickers
const colorPickers = document.querySelectorAll(".color")
colorPickers.forEach((colorPicker) => {
    colorPicker.addEventListener("click", (e) => {
        currectColor = (e.target.id)
        drawingSquares.forEach((square) => {
            if(square.style.opacity == 0) {
                square.style.backgroundColor = currectColor
            }
        })
    })
})