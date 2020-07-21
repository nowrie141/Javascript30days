const player = document.querySelector('.player')
const video = player.querySelector(' .viewer')

const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')

const playButton = player.querySelector('.player__button')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

function controlPlay () {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updateButton () {
  const icon = this.paused ? '▶️' : '⏸️'
  playButton.innerText = icon
}

video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

playButton.addEventListener('click', controlPlay)
video.addEventListener('click', controlPlay)
//Control play and pause with space
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    controlPlay()
  }
}

function skipTime () {
  video.currentTime += parseFloat(this.dataset.skip)
}

skipButtons.forEach(skipButton =>
  skipButton.addEventListener('click', skipTime)
)

function handleRangeUpdate () {
  video[this.name] = this.value
}

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

function handleProgress () {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

video.addEventListener('timeupdate', handleProgress)

function changeTime(e){
  const timeValue = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = timeValue
}

progress.addEventListener('click', changeTime)