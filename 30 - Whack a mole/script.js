const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('.time-left')
const gameSeconds = 10
let countdown

let lastHole
let timeUp = false
let score = 0

function randTime (min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function randHole (holes) {
  const index = Math.floor(Math.random() * holes.length)
  const hole = holes[index]
  if (hole === lastHole) {
    return randHole(holes)
  }
  lastHole = hole
  return hole
}

function popHoles () {
  const time = randTime(200, 1000)
  const hole = randHole(holes)
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up')
    if (!timeUp) popHoles()
  }, time)
}

function displayTimeLeft (seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  let display = 0
  display = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
  timeLeft.textContent = display
}

function startGame () {
  clearInterval(countdown)
  scoreBoard.textContent = 0
  score = 0
  timeUp = false
  popHoles()
  const now = Date.now()
  const then = now + gameSeconds * 1000
  displayTimeLeft(gameSeconds)
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft < 0) {
      clearInterval(countdown)
      timeUp = true
      return
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function bonk (e) {
  console.log(e.isTrusted)
  if (!e.isTrusted) return
  score++
  this.classList.remove('up')
  scoreBoard.textContent = score
}

moles.forEach(mole => mole.addEventListener('click', bonk))
