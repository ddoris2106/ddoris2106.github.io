const images = document.querySelectorAll(".dispIMG");
const menuContainer = document.querySelector("#menuContainer");
const menuIcon = document.querySelector("#menuIcon");
const aboutIcon = document.querySelector("#about");
const worksIcon = document.querySelector("#works");
const contactIcon = document.querySelector("#contact");

var slideIndex = 0;
var first = true;

// menuContainer.addEventListener("mouseover", () => {menuContainer.style.height = "auto"});


for (var i = 0; i < images.length; i++) {
    images[i].style.opacity = "0";
}

images[0].style.opacity = "1";
const checkIndex = () => {
    if (slideIndex == images.length - 1) {
        slideIndex = 0;
    }
    else {
        slideIndex++;
    }
}

const fader = () => {
    if (first == true) {
        window.setTimeout(() => {
            images[slideIndex].style.animationName = "fadeOut";
            checkIndex();
        }, 4000);
        first = false;
    }
    else {
        window.setTimeout(() => {
            images[slideIndex].style.animationName = "fadeIn";
        }, 1000);
        window.setTimeout(() => {
            images[slideIndex].style.animationName = "fadeOut";
            checkIndex();
        }, 5000);
    }
}

fader();
let iQ = setInterval(()=> {
    fader();
}, 6000);
// console.log("Get Connected, For Free!");
