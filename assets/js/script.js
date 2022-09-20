//  select elements from the DOM
//   start button   
// word-blanks div
var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')



// array of words
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]
var word
// score variable
// timeleft variable

// reset the word-blanks - an _ for each letter of the new word
function renderCharacters() {
    // var to hold a new string
    var str = ""
    for (var i = 0; i < word.length; i++) {
        //if weve guessed the character
        //push the character into str
        //else
        //add an _ into str
        str += '_ '

    }
    //set textContent of wordBlanksEl to be str
    wordBlanksEl.textContent = str.trim()
}


function startRound() {
// get random word from words array
var randomIndex = Math.floor(Math.random() * words.length)
word = words[randomIndex]
renderCharacters()
}

startBtn.addEventListener("click", startRound)







// addEventListener to start button (click)
// get random word from words array 
// reset the word-blanks - 