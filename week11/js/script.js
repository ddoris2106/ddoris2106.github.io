const path = document.querySelector("#heart path");
var length = path.getTotalLength();


path.style.transition = path.style.WebkitTransition = 'none';
// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();
// Define our transition
path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 1s linear';
// Go!
path.style.strokeDashoffset = '0';
