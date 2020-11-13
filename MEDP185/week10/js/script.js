const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");
const downArrow = document.querySelector("#downArrow");
const upArrows = document.querySelectorAll(".upArrow");
const space1 = document.querySelector("#fullSize");
const space2 = document.querySelector("#sunContainer");
const space3 = document.querySelector("#upArrowContainer");
const sun = document.querySelector("#Layer_1");
const inner = document.querySelector("#sunContainer path");
var len = inner.getTotalLength();
const path = document.querySelectorAll("#sunContainer #outline path");
var length = [];
var order = [6, 1, 0, 2, 3, 4, 5];
for (var j = 0; j < path.length; j++) {
    length.push(path[j].getTotalLength())
}

var count = 0;

function pageScrollDown() {
    window.scrollBy(0,window.innerHeight);
}
function pageScrollDown2() {
    window.scrollBy(0,window.innerHeight*2);
}
function pageScrollUp() {
    document.documentElement.scrollTop = 0;
}

space1.style.height = window.innerHeight + "px";
space2.style.height = window.innerHeight + "px";
space3.style.height = window.innerHeight/2 + "px";

// console.log(length);

var slideIndex = 1;

for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

const slideRight = () => {
    slideIndex += 1;
    dots[slideIndex-2].className = "dot";
    showSlides();
}

const slideLeft = () => {
    slideIndex -= 1;
    dots[slideIndex].className = "dot";
    showSlides();
}

const dotClick = index => {
    dots[slideIndex].className = "dot";
    slideIndex = index;
    showSlides();
}

rightArrow.addEventListener("click", slideRight);
leftArrow.addEventListener("click", slideLeft);
dots[0].addEventListener("click", function () {dotClick(1)});
dots[1].addEventListener("click", function () {dotClick(2)});
dots[2].addEventListener("click", function () {dotClick(3)});
dots[3].addEventListener("click", function () {dotClick(4)});
dots[4].addEventListener("click", function () {dotClick(5)});


const checkIndex = () => {
    if (slideIndex == slides.length) {
        rightArrow.style.display = "none";
    }
    else if (slideIndex == 1){
        leftArrow.style.display = "none";
    }
    else {
        rightArrow.style.display = "block";
        leftArrow.style.display = "block";
    }
}

const showSlides = () => {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className.replace(" current", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " current";

    checkIndex();
}

showSlides();

const startSVG = () => {
    inner.style.transition = inner.style.WebkitTransition =
      'none';
    // Set up the starting positions
    inner.style.strokeDasharray = len + ' ' + len;
    inner.style.strokeDashoffset = len;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    inner.getBoundingClientRect();
    // Define our transition
    inner.style.transition = inner.style.WebkitTransition =
      'stroke-dashoffset 14s linear';
    // Go!
    inner.style.strokeDashoffset = '0';

    activePath = path[order[0]];
    activeLength = length[order[0]];
    activePath.style.opacity = "1";
    activePath.style.transition = activePath.style.WebkitTransition =
      'none';
    // Set up the starting positions
    activePath.style.strokeDasharray = activeLength + ' ' + activeLength;
    activePath.style.strokeDashoffset = activeLength;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    activePath.getBoundingClientRect();
    // Define our transition
    activePath.style.transition = activePath.style.WebkitTransition =
      'stroke-dashoffset 2s linear';
    // Go!
    activePath.style.strokeDashoffset = '0';
}

const drawSVG = () => {
    var i = 1;
    let iQ = setInterval(()=> {
        if (i < path.length ){
            activePath = path[order[i]];
            activeLength = length[order[i]];
            activePath.style.opacity = "1";
            activePath.style.transition = activePath.style.WebkitTransition =
              'none';
            // Set up the starting positions
            activePath.style.strokeDasharray = activeLength + ' ' + activeLength;
            activePath.style.strokeDashoffset = activeLength;
            // Trigger a layout so styles are calculated & the browser
            // picks up the starting position before animating
            activePath.getBoundingClientRect();
            // Define our transition
            activePath.style.transition = activePath.style.WebkitTransition =
              'stroke-dashoffset 2s linear';
            // Go!
            activePath.style.strokeDashoffset = '0';
            i++;
        }
        console.log(i);
    }, 2000);
}


downArrow.addEventListener("click", pageScrollDown);
sun.addEventListener("click", pageScrollDown2);
upArrows[0].addEventListener("click", pageScrollUp);
upArrows[1].addEventListener("click", pageScrollUp);
upArrows[2].addEventListener("click", pageScrollUp);
upArrows[3].addEventListener("click", pageScrollUp);


document.addEventListener('scroll', function (e) {
	var scrolledTop  = window.pageYOffset + window.innerHeight;
	var sunContainerOffset = window.innerHeight + sun.offsetTop;
	var isSunVisible = scrolledTop > sunContainerOffset;
	if (isSunVisible = true) {
        count++;
        if(count == 1){
            startSVG();
            drawSVG();
        }
	}
});
