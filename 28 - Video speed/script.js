const speed = document.querySelector('.speed')
const bar = speed.querySelector('.speed-bar')
const video = document.querySelector('.flex')

let isDown = false

speed.addEventListener('mousedown', () => {
  isDown = true
})

speed.addEventListener('mouseup', () => {
  isDown = false
})

speed.addEventListener('mousemove', e => {
  if (!isDown) return
  const y = e.pageY - speed.offsetTop
  const percent = y / speed.offsetHeight
  const height = Math.round(percent * 100) + '%'
  const min = 0.5
  const max = 2
  bar.style.height = height
  const playbackRate = percent * (max - min) + min
  bar.textContent = playbackRate.toFixed(2) + 'x'
  video.playbackRate = playbackRate
})
