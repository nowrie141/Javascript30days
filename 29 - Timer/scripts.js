let countdown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const controls = document.querySelectorAll('[data-time]')

function startTimer () {
  //Clear existing timer

  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}

controls.forEach(button => button.addEventListener('click', startTimer))

function timer (seconds) {
  clearInterval(countdown)
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)

    //Check if we got to 0
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    //Display the time left
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft (seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  let display = 0
  display = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
  document.title = display
  timerDisplay.textContent = display
}

function displayEndTime (timestamp) {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const mins = end.getMinutes()
  endTime.textContent = `Come back at ${hour < 10 ? '0' : ''}${hour}:${
    mins < 10 ? '0' : ''
  }${mins}`
}

document.customForm.addEventListener('submit', e => {
  e.preventDefault()
  const mins = document.customForm.minutes.value
  timer(mins * 60)
})
