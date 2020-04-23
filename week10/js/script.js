const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
const rightArrow = document.querySelector("#rightArrow");
const leftArrow = document.querySelector("#leftArrow");


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

// const dotClick = () => {
//     slideIndex =
// }

rightArrow.addEventListener("click", slideRight);
leftArrow.addEventListener("click", slideLeft);


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
    // dots[slideIndex-1].style.backgroundColor = "rgba(0,0,0,0.9);";
    dots[slideIndex-1].className += " current";

    checkIndex();
}

showSlides();
