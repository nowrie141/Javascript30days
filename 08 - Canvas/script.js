
const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

var rect = canvas.parentNode.getBoundingClientRect()
canvas.width = rect.width
canvas.height = rect.height

ctx.strokeStyle = `#BADA55, 100%, 50%`
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let isDrawing = false
let lastX = 0
let lastY = 0

//Change the span size value to the actual value
const sizeSpan = document.querySelector('.controls .spansize')
sizeSpan.innerText = `${ctx.lineWidth}`
//Change the span color value to the actual value
const colorSpan = document.querySelector('.controls .spanbase')
colorSpan.innerText = `${ctx.strokeStyle}`

console.log(ctx.strokeStyle)

function draw (e) {
  if (!isDrawing) return //They are not drawing
  
  //Start the line here
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)

  //Finish it here
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()

  lastX = e.offsetX
  lastY = e.offsetY
}

//Update the position to draw
canvas.addEventListener('mousedown', e => {
  isDrawing = true
  
  lastX = e.offsetX
  lastY = e.offsetY
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mouseout', () => (isDrawing = false))

const size = document.querySelector('.controls .input .size')
const color = document.querySelector('.controls .input .base')
const clear = document.querySelector('.controls .input .clear')

console.log(clear);

size.value = `${ctx.lineWidth}`
color.value = `${ctx.strokeStyle}`

function changeSize () {
  console.log(this.value);
  sizeSpan.innerHTML = `${this.value}`
  ctx.lineWidth = parseInt(this.value)
}

function changeColor () {
  colorSpan.innerHTML = `${this.value}`
  ctx.strokeStyle = `${this.value}`
  console.log(this.value)
}

size.addEventListener('change', changeSize)

color.addEventListener('change', changeColor)

clear.addEventListener('click', function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);