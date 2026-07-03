let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter);

    span.appendChild(theLetter);
    span.classList = "letter-box";

    lettersContainer.appendChild(span);
});

// Object of words 
const words = {
    programing: ["front end", "java script", "python", "php", "go", "java"],
    anemal: ["lion", "cat", "dog", "frish", "thecken"],
    people: ["amer", "slem", "mohammed", "ahmed", "samer"],
    countries: ["syria", "palestine", "yemen", "egypt", "bahrain", "qatar"]
}

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;

// 

let lettersGuess = document.querySelector(".letters-guess");

let letterAndSpace = Array.from(randomValueValue);

letterAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");

    if (letter === " ") {
        emptySpan.classList = "with-space";
    }
    lettersGuess.appendChild(emptySpan);
})

//
let guesspan = document.querySelectorAll(".letters-guess span");
let wrongNumber = 0;
let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {

    // set the chose status
    let theStatus = false; 

    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        theChosenWord.forEach((wordeLetter, wordIndex) => {
            if (theClickedLetter == wordeLetter) {
                theStatus = true;

                guesspan.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = wordeLetter;
                        if (span !== " ") {
                            span.classList = "om";
                            let theSpan = document.querySelectorAll(".letters-guess span");
                            let allClass = Array.from(theSpan).every(span => span.classList.contains("om"))
                            if (allClass) {
                                youAreWin();
                            }
                        }
                    }

                });

            }

        });

        if (theStatus !== true) {
            wrongNumber++;

            theDraw.classList.add(`wrong-${wrongNumber}`);

            document.getElementById("fail").play();

            if (wrongNumber === 8) {
                endGame();
                
                lettersContainer.classList.add("finished");
            }
            
        } else {
            document.getElementById("success").play();
        }
        
    }
    
});


function endGame() {
    let div = document.createElement("div");
    let divText = document.createTextNode(`Game Over, ${randomValueValue}`);
    let but = document.createElement("button");
    let butText = document.createTextNode(`عيدها`);
    
    but.appendChild(butText);
    div.appendChild(divText);
    div.appendChild(but);
    div.className = "popup";
    
    document.body.appendChild(div);
    
    but.onclick = function () {
        location.reload();
    }
}

function youAreWin() {
    let div = document.createElement("div");
    let divText = document.createTextNode(`You Are Win`);
    let but = document.createElement("button");
    let butText = document.createTextNode(`عيدها`);
    
    but.appendChild(butText);
    div.appendChild(divText);
    div.appendChild(but);
    div.className = "popup";
    
    document.body.appendChild(div);
    
    but.onclick = function () {
        location.reload();
    }
}
