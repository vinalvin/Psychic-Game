var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function pickLetter() {
    var random = Math.floor(Math.random() * computerChoices.length);
    computerGuess = computerChoices[random];
    console.log("computerGuess", computerGuess);
}
pickLetter()

document.onkeypress = function(event) {
    if (event.key === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        pickLetter()
    } else {
        guessesLeft--;
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        lettersGuessed.push(event.key);
        document.querySelector("#letterGuessed").innerHTML = lettersGuessed.join();
    }
    console.log("wins", wins);
    console.log("guessesLeft", guessesLeft);

    if (guessesLeft == 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        guesses = 9;
        lettersGuessed = [];
        document.querySelector("#lettersGuessed").innerHTML = lettersGuessed.join();
        pickLetter();
    }
    console.log("losses", losses);
}