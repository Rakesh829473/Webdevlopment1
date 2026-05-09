// Random Number Generate
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {

    let guess = document.getElementById("guessNumber").value;

    // Convert into Number
    guess = Number(guess);

    // Validation
    if (guess < 1 || guess > 10 || guess === "") {

        alert("Please enter a number between 1 to 10");

        return;
    }

    // Check Guess
    if (guess > randomNumber) {

        alert("OOPS SORRY!! TRY A SMALLER NUMBER");

    }

    else if (guess < randomNumber) {

        alert("OOPS SORRY!! TRY A LARGER NUMBER");

    }

    else {

        alert("🎉 Congratulations! Correct Number");

    }
}