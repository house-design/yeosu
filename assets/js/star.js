'use strict';

// var instance = basicScroll.create({
// 	elem: document.body,
// 	from: 0,
// 	to: document.documentElement.scrollHeight-window.innerHeight,
// 	props: {
// 		'--translateScrollY': {
// 			from: 0,
// 			to: 1
// 		}
// 	}
// })

// instance.start()

function createStar(x, y, index, debug) {
  var starParallax = document.createElementNS("http://www.w3.org/2000/svg", 'g');
  starParallax.classList.add('star-parallax');
  
  var starTranslate = document.createElementNS("http://www.w3.org/2000/svg", 'g');
  starTranslate.setAttribute('transform', `translate(${x} ${y})`);
  
  var radius = debug ? 10 : 1.3;
  var depth = 1 + index%5; //create 5 parallax layer
  var parallaxIntensity = 200; // maximum translation basically.
  var delay = index * 100 + 500 * Math.random();
  var duration = 3000 + Math.random() * 4000;
  var brightness = 0.7 + Math.random() * 0.3;
  
  starParallax.style.setProperty('--parallax-depth', depth); 
  starParallax.style.setProperty('--parallax-intensity', parallaxIntensity); 
  
  var star = document.createElementNS("http://www.w3.org/2000/svg", 'circle');  
  star.setAttribute('r', radius);
  star.classList.add('star');
  
  star.style.setProperty('--star-animation-delay', `${delay}ms`);
  star.style.setProperty('--star-animation-duration', `${duration}ms`);
  star.style.setProperty('--star-animation-glow-duration', `10000ms`);
  star.style.setProperty('--star-brightness', `${brightness}`);

  starTranslate.appendChild(star);
  starParallax.appendChild(starTranslate);
  return starParallax;
}

function createNightSky(debug) {
  var header = document.getElementById('header')
  var container = document.getElementById('starGroup')
  var ary = Array.apply(null, Array(80))
  ary.forEach(function(data, index) {
    var star = createStar(randomNumber(header.offsetWidth), randomNumber(header.offsetHeight), index, debug);
    container.appendChild(star);
  })
}

createNightSky();

function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}