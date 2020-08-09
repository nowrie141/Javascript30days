const msg = new SpeechSynthesisUtterance() //What is the voice going to say
let voices = [] //Where the voices are dumped
const voicesDropdown = document.querySelector('[name="voice"]') //Select the voice
const options = document.querySelectorAll('[type="range"], [name="text"]') //Options for the voice
const speakButton = document.querySelector('#speak') //Button to speak
const stopButton = document.querySelector('#stop') //Button to stop

msg.text = document.querySelector('[name="text"]').value

function populateVoices () {
  voices = this.getVoices()
  const voiceOptions = voices
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name} (${voice.lang}) </options>`
    )
    .join('')
  voicesDropdown.innerHTML = voiceOptions
}

function toggle (startOver = true) {
  speechSynthesis.cancel()
  if (startOver) {
    speechSynthesis.speak(msg)
  }
}

function setVoice () {
  msg.voice = voices.find(voice => voice.name === this.value)
  toggle()
}

function setOption () {
  msg[this.name] = this.value
  toggle()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)

options.forEach(option => option.addEventListener('change', setOption))

stopButton.addEventListener('click', () => toggle(false)) //Call a function
speakButton.addEventListener('click', toggle)
