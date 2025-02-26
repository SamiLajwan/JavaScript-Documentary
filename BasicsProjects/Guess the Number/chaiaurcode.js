let RandomNumber = parseInt(Math.random() * 100 + 1); // Store the random number in a variable
console.log(RandomNumber); // Log the random number to the console

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid Number');
    } else if (guess < 1) {
        alert('Please enter a Number more than 1.');
    } else if (guess > 100) {
        alert('Please enter a Number less than 100.');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, RandomNumber was ${RandomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === RandomNumber) {
        displayMessage(`You guessed it right.`);
        endGame();
    } else if (guess < RandomNumber) {
        displayMessage(`Number is too Low.`);
    } else if (guess > RandomNumber) {
        displayMessage(`Number is too High.`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    // End game logic here
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame(); 
}

function newGame() {
    // New game logic here
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click', function(e){
        RandomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    });
}







