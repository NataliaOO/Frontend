const startBtn = document.querySelector('#start')
const screen = document.querySelectorAll('.screen')
const timeBtn = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')


const colors = [

    "#F1C40F",
   
    "#3498db",
   
    "#BFC9CA",
   
    "#e67e22",
   
    "#1ABC9C",
   
    "#2ecc71",

    "#BB8FCE",
   
];

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screen[0].classList.add('up')
})

timeBtn.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screen[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score ++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreasetime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreasetime() {
    if (time === 0) {
        finishGame()
    } else  {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const color = getRandomColor()
    const size = getRandomNumber(10,60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.background = color
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round( Math.random() * (max - min) + min)
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function winTheGame() {

    function kill() {
        const circle = document.querySelector('.circle')

        if (circle) {
            circle.click()
        }
        
    }
    setInterval(kill,75)
}