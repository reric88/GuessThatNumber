// console.log('ᓚᘏᗢ');

// Guess That Number
// Message to be used throughout the project
const enterNumText = 'Please enter a number greater than zero:';

let restartGame = true;

// for storing range of number to be guessed
let rangeNum;

// For storing the number of attempts the user has remaining
let lives;

// For storing the users guess
let guess;

// For storing the users response to play again or not play again
let playAgain;

// Starting alert message
// console.log('Welcome to THE GAME. Please click "OK" to start the game.');
alert('Welcome to THE GAME. Please click "OK" to start the game.')

// Game restarts as long ias restartGame is true
while (restartGame) {
    // Asks the user to enter a number to set the upper limit for the random number that will be created
    rangeNum = prompt('Please enter a maximum number for the range');
    
    // Using parseInt to attempt to convert the users response into a number value
    rangeNum = parseInt(rangeNum)
    
    // Verifies the users entry for a range number is a number greater than 0
    // All number, positive or negative, have a default boolean value of true, except for zero, which is false
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }










    restartGame = false;
}

























