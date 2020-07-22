const wrapper = document.querySelector('.wrapper')
const text = wrapper.querySelector('h1')
const lengthShadow = 50;
function moveShadow(e){
  const {offsetWidth: width, offsetHeight: height} = wrapper
  let { offsetX: x, offsetY: y} = e

  if (e.target !== this){ //Going through h1 distorts the offset
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  shadowX = Math.round((x/width * lengthShadow) - (lengthShadow/2))
  shadowY = Math.round((y/height * lengthShadow) - (lengthShadow/2))

  console.log(shadowX, shadowY)

  text.style.textShadow = `${-shadowX}px ${-shadowY}px 0 rgba(0,0,0,0.5)`
}

wrapper.addEventListener('mousemove', moveShadow)