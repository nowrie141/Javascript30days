const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink(){
  const linkCoords = this.getBoundingClientRect() //Gives us the information about the element position and size
  highlight.style.width = `${linkCoords.width}px`
  highlight.style.height = `${linkCoords.height}px`
  highlight.style.transform = `translate( ${linkCoords.left + window.scrollX}px, ${linkCoords.top + window.scrollY}px)`
}

triggers.forEach(
  trigger => trigger.addEventListener('mouseenter', highlightLink)
)