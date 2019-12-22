const hsl = require('hsl-to-hex') // import the script

const hero = document.querySelector('.upper-text__wrapper')
const button = document.querySelector('.js_color-button')
const els = [document.body, hero, button]

const fills = document.querySelectorAll('.fill')

function colorizeAll() {
  const c = randomColor()
  document.body.style.backgroundColor = c
  hero.style.backgroundColor = c
  button.style.color = c
}

const c = randomColor()
// document.body.style.backgroundColor = c
hero.style.backgroundColor = c
button.style.color = c

hero.addEventListener('click', colorizeAll)
button.addEventListener('click', colorizeAll)

// fills.forEach((f) => {
//   const c = randomColor()
//   f.style.backgroundColor = c
// })

// button.textContent =.split.forEach(letter => letter.style.)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function randomColor() {
  const hue = getRandomInt(360)
  const saturation = 75
  const luminosity = 75

  return hsl(hue, saturation, luminosity)
}
