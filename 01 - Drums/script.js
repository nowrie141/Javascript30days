window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  //Select the audio we want to reproduce (add the quotes)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //No key associated with sound, so stop from running
  audio.currentTime = 0; //Rewind in order to replay it fast, not to the end of the audio
  audio.play();
  key.classList.add('playing');
});

function removeTransition(e){
  if(e.propertyName !== 'transform') return; //If it's not a transform skip it
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

