
window.addEventListener('load', init)

// Levels available

const levels = {
    easy: 5,
    medium : 3,
    hard : 2
}

// To change levels

const currentTimeLevel  = levels.medium;

// Global Variables

let time = currentTimeLevel;
let score = 0;
let isPlaying;

// DOM elements variables

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds =  document.querySelector('#seconds');

const words = [
    'hat',
    'riveer',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developper',
    'establishment', 
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'  
];

// Init game
function init() {

    // Show number in second in UI
    seconds.innerHTML = currentTimeLevel;
    // load word from array
    showWord(words);  

    // start matching on word input
    wordInput.addEventListener('input', startMatch)
    
    // Call xountdows every second
    setInterval(countDown, 1000);

    // Check game status
    setInterval(checkStatus, 50); 
}


//--------------------------------------

// start Match

function startMatch() {
    if(matchWord()) {
        isPlaying = true;
        time = currentTimeLevel +1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    if(score == -1) {
        scoreDisplay.innerHTML = 0;
          
    } else {
        scoreDisplay.innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
} 


function matchWord() {
        if(wordInput.value == currentWord.innerHTML) {
            message.innerHTML = 'Correct';
            return true;
        } else {
            message.innerHTML = '';
            return false;
        }
    }


// Pick and show random word
function showWord(words) {
    //    Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);

    // Ouput random word form array
    currentWord.innerHTML = words[randIndex];  
}

// Count down timer

function countDown() {
    // check time not runout
    if(time > 0) {
        time--;
    } else if (time == 0) {
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status

function checkStatus() {
    if(!isPlaying && time == 0) {
        message.innerHTML = "Game Over !";
        score = -1;

    }
      
}





