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
        computerGuess.push(event.key);
        document.querySelector("#computerGuess").innerHTML = computerGuess.join();
    }
    console.log("wins", wins);
    console.log("guessesLeft", guessesLeft);

    if (guessesLeft == 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        guesses = 9;
        computerGuess = [];
        document.querySelector("#computerGuess").innerHTML = computerGuess.join();
        pickLetter();
    }
    console.log("losses", losses);
}