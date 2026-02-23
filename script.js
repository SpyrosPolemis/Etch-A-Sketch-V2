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
        let opacity = Number(square.style["opacity"])
        opacity += 0.2
        square.style["opacity"] = opacity
    })
})

const clearBtn = document.querySelector("#clear-btn")
clearBtn.onclick = () => {
    drawingSquares.forEach((square) => {
        square.style["opacity"] = 0
    })
}

const colorPickers = document.querySelectorAll(".color")
let currectColor = "black"
colorPickers.forEach((colorPicker) => {
    colorPicker.addEventListener("click", (e) => {
        currectColor = (e.target.id)
        console.log("Test")
        drawingSquares.forEach((square) => {
            if(square.style.opacity == 0) {
                square.style.backgroundColor = currectColor
                console.log("working")
            }
        })
    })
})