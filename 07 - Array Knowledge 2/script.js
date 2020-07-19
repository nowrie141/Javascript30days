// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
]

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const isAdult = people.some( (person) => {
  const currentDate = (new Date().getFullYear())
  return currentDate - person.year >= 19
})

console.log("There are some persons older than 19?", isAdult);

const everyAdult = people.every( (person) => {
  const currentDate = (new Date().getFullYear())
  return currentDate - person.year >= 19
})
console.log("Is every people older than 19?", everyAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const idComment = comments.find( (comment) => {
  if( comment.id === 823423 ){
    return true;
  }
})

console.log(idComment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const i = comments.findIndex( (comment) => {
  if( comment.id === 823423 ){
    return true;
  }
})

comments.splice(i, 1)
 /* OR */

 const newComments = [
   ...comments.slice(0, i),
   ...comments.slice(i)
 ]

 console.log(comments, newComments);