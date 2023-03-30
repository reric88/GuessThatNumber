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
    };

    // Create the random number within the range entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;
    console.log(rangeNum);

    // Prompts the user to enter a number of attempts allowed
    lives = parseInt(prompt('Please enter a number of attempts allowed.'));
    console.log(lives);
    
    // Verifying the users entry for the number of attempts allowed is a number greater than 0 and equal to or less than the rangeNum
    while (!lives || lives < 1 || lives > rangeNum) {
        lives = parseInt(prompt('Please enter a number of attempts allowed.'));
        console.log(lives);
    };

    // Ask the user to enter a guess in the range they specified
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${lives} attempts remaining.`);

    // Continue looping until the user guesses the correct number or runs out of attempts. As this is currently setup, the
    while (true) {
        
        // Displays the number when a codeword is entered
            while (guess === 'pickle') {
                alert(`The number is ${randomNum}.`);
                guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${lives} attempts remaining.`);
            }
        
            // convert users guess to a number
            guess = parseInt(guess);

            // Verify the users guess is a number greater than zero and less than or equal to the range they set
            while (!guess || guess < 1 || guess > rangeNum) {
                guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
            };

            // Remove attempt for each guess
            lives--;

            // if else
            if (guess === randomNum) {
                alert(`CONGRATULATIONS, YOU GUESSED THE CORRECT NUMBER! ${randomNum}`);
                break;
                // Check if the user has any attempts left. If not, the game ends and the number is displayed to the user
            } else if (lives === 0) {
                alert(`No Lives Remaining. The number was ${randomNum}`);
                break;
            // Checks to see if the guess is too low and prompts the user to answer
            } else if (guess < randomNum) {
                guess = prompt(`Number too low. You have ${lives} attempts remaining.`);
                // The only other possibility is for the guess to be too high, so we use else instead of else if
            } else {
                guess = prompt(`Number too high. You have ${lives} attempts remaining.`);
            }

            
        }
        // Ask if the user would like to play again
        playAgain = prompt('Would you like to play again? (Y)es or (N)o.')

        // Loop continues until the user enters a valid response
        while (true) {
            // Check if the user says no
            if (playAgain.toUpperCase() === 'N') {
                alert('Thanks for playing!')
                restartGame = false;
                break;
                // Check if the user says yes
            } else if (playAgain.toUpperCase() === 'Y') {
                // The game restarts
                break;
            }else {
                playAgain = prompt('Please enter Y or N')
        } 

            // Move when needed
            // break;
    };




    // remove when needed
    // restartGame = false;
}

























