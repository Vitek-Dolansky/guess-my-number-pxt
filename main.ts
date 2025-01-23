let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = 0;
let attempts = 0;

basic.showString("Guess my number (1-100)");

input.onButtonPressed(Button.A, () => {
    guess -= 1;
    if (guess < 1) {
        guess = 1;
    }
    basic.showNumber(guess);
});

input.onButtonPressed(Button.B, () => {
    guess += 1;
    if (guess > 100) {
        guess = 100;
    }
    basic.showNumber(guess);
});

input.onButtonPressed(Button.AB, () => {
    attempts += 1;
    if (guess < secretNumber) {
        basic.showString("Higher");
    } else if (guess > secretNumber) {
        basic.showString("Lower");
    } else {
        basic.showString("You got it! Attempts: " + attempts);
        resetGame();
    }
});

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    guess = 0;
    attempts = 0;
    basic.showString("Guess my number (1-100)");
}
