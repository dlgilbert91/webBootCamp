var gameRunning = true;
var number = 7;
var userGuess;

do {
    userGuess = prompt("Try guess the number!");
    if (userGuess > number) {
        alert("Your guess was too high. Try again");
    }
    else if (userGuess < number) {
        alert("Your guess was too low. Try again");
    } else {
        alert("You guessed it!");
        gameRunning = false;
    }
} while (gameRunning);