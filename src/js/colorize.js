const hsl = require("hsl-to-hex"); // import the script

const hero = document.querySelector(".upper-text__wrapper");
const button = document.querySelector(".js_color-button");
const highlightBar = document.querySelector(".highlight-bar");
const els = [document.body, hero, button];

const fills = document.querySelectorAll(".fill");

export function colorizeAll() {
  const c = randomColor();
  const c2 = randomColor();
  document.body.style.background = `linear-gradient(to bottom right, ${c}, ${c2})`;
  // button.style.borderImage = `linear-gradient(to bottom right, ${c} 0%, ${c2} 25%, ${randomColor()} 50%, ${randomColor()} 75%, ${randomColor()} 100%)`
  hero.style.backgroundColor = c;
  button.style.color = c;
  highlightBar.style.opacity = 1;
}

const c = randomColor();
// document.body.style.backgroundColor = c
// hero.style.backgroundColor = c
button.style.color = c;

hero.addEventListener("click", colorizeAll);
button.addEventListener("click", colorizeAll);

// fills.forEach((f) => {
//   const c = randomColor()
//   f.style.backgroundColor = c
// })

// button.textContent =.split.forEach(letter => letter.style.)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function randomColor() {
  const hue = getRandomInt(360);
  const saturation = 75;
  const luminosity = 75;
  return hsl(hue, saturation, luminosity);
}
