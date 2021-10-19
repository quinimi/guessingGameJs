let randomNumber = Math.floor(Math.random() * 100) + 1; //assigned a random # 1 - 100 calculated using a mathematical algorithm

//stores a reference to the results paragraphs in HTML, and used to insert values in the paragraphs later 
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');


//store references to the form text input and submit button (used to control submit of guesses)
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');


//stores the guess count and tracks # of guesses 
let guessCount = 1;
let resetButton; //reference to reset button that doesn't exist yet 

/* 
sets up the variables and constants needed to store the data our program will use.
*/

function checkGuess () {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratualtion you got it right!';
        lastResult.style.backgroudColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroudColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!' ;
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high' ;
        }
    }

   
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

