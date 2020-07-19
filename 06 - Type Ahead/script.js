const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

function findString (string, cities) {
  return cities.filter(c => {
    const regex = new RegExp(string, 'gi')
    return c.city.match(regex)
  })
}

function numberWithCommas (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function displayMatches () {
  const matchStrings = findString(this.value, cities)
  matchStrings.sort((a, b) => {
    const aPop = parseInt(a.population)
    const bPop = parseInt(b.population)
    if (aPop > bPop) {
      return -1
    } else {
      return 1
    }
  })
  if (this.value !== ''){
  const html = matchStrings
    .map(c => {
      const regex = new RegExp(this.value, 'gi')
      const cityName = c.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      )
      return `<li>
                <span class="name">${cityName}, ${c.state}</span>
                <span class="pop">${numberWithCommas(c.population)}</span>
            </li>`
    })
    .join('')
    suggestions.innerHTML = html
  }else{
    suggestions.innerHTML = "<li>Filter for a city</li>"
  }

}

const input = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

input.addEventListener('change', displayMatches)
input.addEventListener('keyup', displayMatches)
