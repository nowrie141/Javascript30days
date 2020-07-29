const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

strip = (bandName) => {
  return bandName.replace(/^(a |the |an |oh, )/i, '').trim()
}

const sorted = bands.sort( (aBand, bBand) => {
  if (strip(aBand) > strip(bBand)){
    return 1
  }else{
    return -1
  }
})

const bandList = document.querySelector('#bands')

bandList.innerHTML = sorted.map( band => `<li>${band}</li>`).join('')

