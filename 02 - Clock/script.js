const secondHand = document.querySelector(".second");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");

function setDate(){
  const actualDate = new Date();
  const seconds = actualDate.getSeconds();
  const minutes = actualDate.getMinutes();
  const hours = actualDate.getHours();

  const secondDegrees = ((seconds/60)*360)+90; //We add 90 because of the offset 
  secondHand.style.transform = `rotate(${secondDegrees}deg)`

  const minDegrees = ((minutes/(60))*360)+90;
  minHand.style.transform = `rotate(${minDegrees}deg)`

  const hourDegrees = ((hours/12)*360)+90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);