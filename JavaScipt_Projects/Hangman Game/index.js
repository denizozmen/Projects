const wordElement = document.getElementById("word");
const wrongLettersElements= document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-buton");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part")

const words= ["application", "programming", "interface","wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord);


const correctLetters = ["w","z","i"];
const wrongLetters = [];

function displayWord(){
 
    for (let i = 0; i < selectedWord.split("").length; i++) {
        const item = selectedWord.split("")[i];
        if (correctLetters.includes(item)) {
            wordElement.innerHTML +=`<span class="letter">${item}</span> `
            
        } else {
            wordElement.innerHTML +=`<span class="letter">${""}</span> `
            
        }
    }
     console.log(selectedWord);
}

displayWord();



