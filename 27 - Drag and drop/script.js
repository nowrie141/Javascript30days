const slider = document.querySelector('.items')
let isDown = false

let startX
let scrollLeft

slider.addEventListener('mousedown', e => {
  isDown = true
  slider.classList.add('active')
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})
slider.addEventListener('mouseleave', () => {
  isDown = false //If mouse leaves dont move
  slider.classList.remove('active')
})
slider.addEventListener('mouseup', () => {
  isDown = false //If mouse is up dont move
  slider.classList.remove('active')
})
slider.addEventListener('mousemove', e => {
  if (!isDown) return //If mouse left or is not down return
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft
  const move = (x - startX) * 2 //Calculate the movement of the mouse
  slider.scrollLeft = scrollLeft - move
})
