const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('.results')
let currentShooterIndex = 202
let width = 15
let direction = 1
let invadersId
let goingRight = true
let aliensRemoved = []
let results = 0

//* -- Move around
for (let i = 0; i < 225; i++) {
  const square = document.createElement('div')
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]



// ----- Compare 
window.addEventListener("keydown", (e) => {
    const left = parseInt(window.getComputedStyle(battle).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > 0) {
      jet.style.left = left - 10 + "px";
    }
    //460  =>  board width - jet width
    else if (e.key == "ArrowRight" && left <= 460) {
      jet.style.left = left + 10 + "px";
    }