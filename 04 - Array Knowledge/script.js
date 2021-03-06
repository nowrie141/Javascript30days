// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
]

//Function that capitalizes the first letter from a string
const capitalize = s =>
  s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase()

//Select a table with some className, and construct and print the array data into that table
const createHTMLTable = (array, className) => {
  const table = document.querySelector(`.${className}`)
  if (typeof array[0] === 'object') {
    const keys = Object.keys(array[0])
    const header = table.insertRow(0)
    keys.forEach(key => {
      const headerCell = document.createElement('th')
      headerCell.innerHTML = capitalize(key)
      header.appendChild(headerCell)
    })

    array.forEach(item => {
      const row = table.insertRow()
      Object.keys(item).map(e => {
        const cell = row.insertCell()
        cell.innerHTML = item[e]
      })
    })
  }else {
    array.forEach(item => {
      const row = table.insertRow()
      row.innerHTML = item
    })
  }
}

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const born1500 = inventors.filter(inventor => {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true
  }
})

createHTMLTable(born1500, 'filter')

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
createHTMLTable(fullName, 'map')

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => {
  if(a.year > b.year){
    return 1
  }else{
    return -1
  }
})

createHTMLTable(ordered, 'ordered')

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalYears = inventors.reduce( (total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0)

const total = document.querySelector(".totalyears")
total.innerHTML = totalYears

// 5. Sort the inventors by years lived
const orderByYears = inventors.sort( (a, b) => {
  const aLived = a.passed - a.year
  const bLived = b.passed - b.year
  if (aLived < bLived){
    return 1
  }else{
    return -1
  }
})
createHTMLTable(orderByYears, 'orderbyyears')
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//const frame = document.querySelector('.mw-category')
//const aList = Array.from(frame.querySelectorAll('a'))
//let de = aList.map(link => link.textContent)
//de = de.filter(street => street.includes('de'))

//
//

// 7. sort Exercise
// Sort the people alphabetically by last name

const orderAlphabet = people.sort( (a, b) => {
  const [aFirst, aLast] = a.split(', ')
  const [bFirst, bLast] = b.split(', ')
  if (aLast > bLast){
    return 1
  }else{
    return -1
  }
})

createHTMLTable(orderAlphabet, 'orderalphabet')

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck'
]


const count = data.reduce( (obj, item) => {
  if(!obj[item]){
    obj[item] = 0
  }
  obj[item]++
  return obj
}, {})

const table = document.querySelector('.reduce')
let txt = ""
for (x in count) {
  txt += "<tr><td>" + x + "<td>" + count[x] + "</tr>"
}

table.innerHTML = txt

console.log();
