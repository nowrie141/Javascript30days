const videoNodes = Array.from(document.querySelectorAll('[data-time]'))


const secs = videoNodes.reduce( (acc, current) => {
  const splittedTime = (current.dataset.time).split(':')
  return (
    acc +
    parseInt(splittedTime[0])*60 + parseInt(splittedTime[1])
  )
}, 0)

let secondsLeft = secs

const hours = Math.floor(secondsLeft/3600);
secondsLeft = secondsLeft % 3600

const mins = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60

console.log(hours, mins, secondsLeft);