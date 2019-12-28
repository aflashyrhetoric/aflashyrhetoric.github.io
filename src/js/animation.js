// import gsap from 'gsap'
import anime from 'animejs/lib/anime.es.js'
import { randomColor } from './colorize'

const headings = [
  document.querySelector('.upper-text__header'),
  document.querySelector('.upper-text__subheader'),
]
const heroRef = document.querySelector('.upper-text__wrapper')
const c = randomColor()

anime({
  targets: '.project-box__list-item',
  translateY: [-30, 0],
  opacity: [0, 1],
  duration: 1000,
  delay: anime.stagger(100, {
    from: 'first',
  }),
  // increase delay by 100ms for each elements.
})

const boxRef = document.querySelector('#hero')
const box = {
  bg: boxRef.querySelector('#bg'),
  top: boxRef.querySelector('#topbar'),
  bottom: boxRef.querySelector('#bottombar'),
  left: boxRef.querySelector('#leftbar'),
  right: boxRef.querySelector('#rightbar'),
}

const tl = anime.timeline()

tl.add({
  targets: headings,
  opacity: [0, 1],
  duration: 500,
  delay: 200
})
  .add({
    targets: [box.left, box.right],
    translateY: [-100, 0],
    opacity: [0, 1],
    duration: 300,
  })
  .add(
    {
      targets: box.top,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 400,
      opacity: [0, 1],
      easing: 'easeOutExpo',
    },
    900,
  )
  .add(
    {
      targets: box.bottom,
      strokeDashoffset: [anime.setDashoffset, -1],
      opacity: [0, 1],
      duration: 400,
      easing: 'easeOutExpo',
    },
    900,
  )
  .add(
    {
      targets: heroRef,
      skewX: '-10deg',
      duration: 80,
    },
    900,
  )
  .add(
    {
      targets: box.bg,
      fill: c,
    },
    900
  )
  .add({
    targets: '.lower-text__wrapper',
    transformY: [100, 0],
    opacity: [0, 1],
    duration: 1000,
  })
