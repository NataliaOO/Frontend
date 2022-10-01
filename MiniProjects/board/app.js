const board = document.querySelector('#board')
const SQUARES_NUMBER = 500

const colors = [

    "#772222",
   
    "#3498db",
   
    "#4d2277",
   
    "#e67e22",
   
    "#226277",
   
    "#2ecc71",
   
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    board.append(square);

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}