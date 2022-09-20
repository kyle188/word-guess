//  select elements from the DOM
//   start button   
// word-blanks div
var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')
var scoreEl = document.querySelector('score')


var validChars = "abcdefghijklmnopqrstuvwxyz"
// array of words
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]
var word
var guessedCharacters = []
// score variable
var score = 0
// timeleft variable

function checkWord() {
   var wordFromDOM = wordBlanksEl.textContent.split(' ').join('')

   if (word === wordFromDOM) {
    score++
    scoreEl.textContent = score
   }
}

// reset the word-blanks - an _ for each letter of the new word
function handleKeydown(event) {
    console.log(event.key)
    if (validChars.includes(event.key)) {
        //keep track of the characters we guessed
        guessedCharacters.push(event.key)
        //re-render wordBlanks.textContent
        renderCharacters()
    }
}

function renderCharacters() {
    // var to hold a new string
    var str = ""
    for (var i = 0; i < word.length; i++) {
        var letter = word[i]
        //if weve guessed the character
        if (guessedCharacters.includes(letter) ) {
        //push the character into str
        //else
        //add an _ into str
        str += letter + ' '
        } else {
            str += '_ '
        }

    }
    //set textContent of wordBlanksEl to be str
    wordBlanksEl.textContent = str.trim()
    checkWord()
}


function startRound() {
    guessedCharacters 
// get random word from words array
var randomIndex = Math.floor(Math.random() * words.length)
word = words[randomIndex]
renderCharacters()
}

startBtn.addEventListener("click", startRound)

document.addEventListener('keydown', handleKeydown)






// addEventListener to start button (click)
// get random word from words array 
// reset the word-blanks - 