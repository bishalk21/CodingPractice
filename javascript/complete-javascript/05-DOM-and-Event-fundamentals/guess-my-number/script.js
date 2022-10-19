'use strict';

// ==================== Selecting and Manipulating Elements ====================
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;

*/

// ==================== Implementing the Game Logic ====================

// 1. Generate a random number between 1 and 20
const number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);

// score
let score = 20;

// highscore
let highscore = 0;

// last highscore
let lastHighscore = 0;

// 2. Display the message
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

// ==================== Handling Click Events ====================

// 2. Implementing the Check Button
document.querySelector(".check").addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector(".message").textContent = "No Number!";
        displayMessage("No Number!");
    }

    // When player wins
    else if (guess === number) {
        // document.querySelector(".message").textContent = "Correct Number!";
        displayMessage("Correct Number!");

        document.querySelector(".number").textContent = number;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        } else {
            lastHighscore = highscore;
            document.querySelector(".last-highscore").textContent = lastHighscore;
        }
    }

    // ======= Refactoring the Game Logic =======
    // When guess is wrong
    else if (guess !== number) {
        if (score > 1) {
            // document.querySelector(".message").textContent = guess > number ? "Too High!" : "Too Low!";
            displayMessage(guess > number ? "Too High!" : "Too Low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector(".message").textContent = "You Lost the Game!";
            displayMessage("You Lost the Game!");

            document.querySelector(".score").textContent = 0;
        }
    }
});

// ======= Repeated Code ========
/*
    // When guess is too high
    else if (guess > number) {

        if (score > 1) {
            document.querySelector(".message").textContent = "Too High!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lost the Game!";
            document.querySelector(".score").textContent = 0;
        }
    }

    // When guess is too low
    else if (guess < number) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lost the Game!";
            document.querySelector(".score").textContent = 0;
        }
    }
})
*/


// ==================== Coding Challenge #1 ====================

// Implement a game rest functionality, so that the player can make a new guess!

// Your tasks:

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields
// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector(".again").addEventListener('click', function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
})