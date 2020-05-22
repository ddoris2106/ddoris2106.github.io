const images = document.querySelectorAll(".dispIMG");
const menuContainer = document.querySelector("#menuContainer");
const menuIcon = document.querySelector("#menuIcon");
const aboutIcon = document.querySelector("#about");
const worksIcon = document.querySelector("#works");
const contactIcon = document.querySelector("#contact");
const branches = document.querySelectorAll("#svgContainer #branches path");

var length = [];
var order = [0, 1, 6, 2, 3, 5, 4];
var dir = ["for", "for", "rev", "rev", "rev", "rev", "rev"];
for (var j = 0; j < branches.length; j++) {
    length.push(branches[j].getTotalLength())
    branches[j].style.opacity = "0";
}

var slideIndex = 0;
var first = true;

var count = 0;
function addAnimation() {
    count++;
    if(count % 2 == 0){
        menuContainer.style.animationName = "";
    }
    else {
        menuContainer.style.animationName = "expandMenu";
    }
}

menuContainer.addEventListener("click", addAnimation);

menuIcon.addEventListener("mouseover", () => {
    menuIcon.querySelector("img").style.display = "none";
});
menuIcon.addEventListener("mouseout", () => {
    menuIcon.querySelector("img").style.display = "block";
});
aboutIcon.addEventListener("mouseover", () => {
    aboutIcon.querySelector("img").style.display = "none";
});
aboutIcon.addEventListener("mouseout", () => {
    aboutIcon.querySelector("img").style.display = "block";
});
worksIcon.addEventListener("mouseover", () => {
    worksIcon.querySelector("img").style.display = "none";
});
worksIcon.addEventListener("mouseout", () => {
    worksIcon.querySelector("img").style.display = "block";
});
contactIcon.addEventListener("mouseover", () => {
    contactIcon.querySelector("img").style.display = "none";
});
contactIcon.addEventListener("mouseout", () => {
    contactIcon.querySelector("img").style.display = "block";
});



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


const drawSVG = () => {
    var i = 0;
    let iQ = setInterval(()=> {
        if (i < branches.length ){
            activePath = branches[order[i]];
            activeLength = length[order[i]];
            activePath.style.opacity = "1";
            activePath.style.transition = activePath.style.WebkitTransition =
              'none';
            // Set up the starting positions
            activePath.style.strokeDasharray = activeLength + ' ' + activeLength;
            if (dir[i] == "rev") {
                activePath.style.strokeDashoffset = -activeLength;
            }
            else {
                activePath.style.strokeDashoffset = activeLength;
            }
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
        else {
            for (var k = 0; k < branches.length; k++) {
                branches[k].style.opacity = "0";
            }
            i = 0;
        }
    }, 2000);
}

// const drawArrow = () => {
//     activePath = arrow;
//     activeLength = arrow.getTotalLength();
//     console.log(activeLength);
//     activePath.style.opacity = "1";
//     activePath.style.transition = activePath.style.WebkitTransition =
//       'none';
//     // Set up the starting positions
//     activePath.style.strokeDasharray = activeLength + ' ' + activeLength;
//     activePath.style.strokeDashoffset = activeLength;
//     // Trigger a layout so styles are calculated & the browser
//     // picks up the starting position before animating
//     activePath.getBoundingClientRect();
//     // Define our transition
//     activePath.style.transition = activePath.style.WebkitTransition =
//       'stroke-dashoffset 5s linear';
//     // Go!
//     activePath.style.strokeDashoffset = '0';
// }


fader();

let iQ = setInterval(()=> {
    fader();
}, 6000);

drawSVG();
// drawArrow();


// console.log("Get Connected, For Free!");
