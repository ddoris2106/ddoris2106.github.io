lines = document.querySelectorAll("#textContainer p");
var change = false;
var lineTexts = [];

for (var i = 0; i < lines.length; i++) {
    lineTexts.push(lines[i].innerText);
}

// console.log(lines[3].innerHTML,lineTexts[3]);

function addParenthesis() {
    for (var i = 0; i < lines.length; i++) {
        var num = 1 + (Math.floor(Math.random() * (lineTexts[i].length - 2)));

        const checkASC = str => {
            if((str[num].charCodeAt(0) >= 65 && str[num].charCodeAt(0) <= 90) || (str[num].charCodeAt(0) >= 97 && str[num].charCodeAt(0) <= 122)) {
                return true;
            }
            else {
                return false;
            }
        }

        res = checkASC(lineTexts[i]);
        if (res == false) {
            num = 1 + (Math.floor(Math.random() * (lineTexts[i].length - 2)));
            checkASC(lineTexts[i]);
            i--;
        }
        else {
            var changedString = `${lineTexts[i].substring(0, num)}(${lineTexts[i][num]})${lineTexts[i].substring(num + 1)}`;
            lines[i].innerHTML = `<span>${changedString}</span>`;
        }
    }
}


//Have the parenthesis appear in alternating lines
// First lines 1 and 3 then lines 2 and 4
function alternateParenthesis() {
    for (var i = 0; i < lines.length; i++) {
        var num = 1 + (Math.floor(Math.random() * (lineTexts[i].length - 2)));

        const checkASC = str => {
            if((str[num].charCodeAt(0) >= 65 && str[num].charCodeAt(0) <= 90) || (str[num].charCodeAt(0) >= 97 && str[num].charCodeAt(0) <= 122)) {
                return true;
            }
            else {
                return false;
            }
        }

        res = checkASC(lineTexts[i]);

        if (change) {
            if (i%2 == 1) {
                if (res == false) {
                    num = 1 + (Math.floor(Math.random() * (lineTexts[i].length - 2)));
                    checkASC(lineTexts[i]);
                    i--;
                }
                else {
                    var changedString = `${lineTexts[i].substring(0, num)}(${lineTexts[i][num]})${lineTexts[i].substring(num + 1)}`;
                    lines[i].innerHTML = `<span>${changedString}</span>`;
                }
                change = !change;
            }
        }
        else {
            if (i%2 == 0) {
                if (res == false) {
                    num = 1 + (Math.floor(Math.random() * (lineTexts[i].length - 2)));
                    checkASC(lineTexts[i]);
                    i--;
                }
                else {
                    var changedString = `${lineTexts[i].substring(0, num)}(${lineTexts[i][num]})${lineTexts[i].substring(num + 1)}`;
                    lines[i].innerHTML = `<span>${changedString}</span>`;
                }
                change = !change;
            }
        }
    }
}


// addParenthesis();
alternateParenthesis();

let iQ = setInterval(()=> {
    alternateParenthesis();
    // addParenthesis();
}, 1000);
