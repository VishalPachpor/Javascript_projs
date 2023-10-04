let randomNumber = parseInt(Math.random() *100 + 1);

const submit = document.getElementById("#subt");
const userInput = document.getElementById("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame == true) {
    submit.addEventListener("click", function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("enter a valid number");
    }else if(guess < 0) {
        alert("The number should not be less than 0");
    }else if(guess >100) {
        alert("the number should not be greater than 100")
    }else{
        prevGuess.push(guess);
        if(numGuess >= 10) {
            displayGuess(guess);
            displayMessage(`Game over. Your guess was ${randomNumber}`);
            endGame();
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
 if(guess === randomNumber){
    displayMessage(`You win. ${randomNumber}`);
    endGame();
 }else if( guess < randomNumber){
    displayLowHigh(`${guess} is too Low`);
 }else if(guess > randomNumber) {
    displayLowHigh(`${guess} is Too High`);
 }
}

function displayGuess(guess) {
    userInput.value = " "
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}



function endGame() {
    userInput.value = " "
    userInput.setAttribute("disabled", " ")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start a new Game </h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = " "
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute("disabled");
        startOver.removeChild(p)
        playGame = true;   
    })
}