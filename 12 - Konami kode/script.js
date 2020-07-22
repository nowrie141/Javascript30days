secretCode = 'ArrowUpArrowDownArrowLeftArrowRight ShiftArrowUpArrowDown'
pressed = []

window.addEventListener('keyup', e => {
  pressed.push(e.key)
  console.log(pressed)
  if (pressed.join('').includes(secretCode)) {
    console.log('%c You found it!', 'font-size: 50px')
    cornify_add()
  }
  if (pressed.length === secretCode.length) {
    pressed.shift()
  }
})
