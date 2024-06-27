'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log((document.querySelector('.guess').value = 23));
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //If there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔ No Number';
      displayMessage('⛔ No Number');
      // When player wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎉 Correct Number';
      displayMessage('🎉 Correct Number');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
    // When guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        // guess > secretNumber ? '📈 Too High' : '📉 Too Low';
        displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');

        document.querySelector('body').style.backgroundColor =
          guess > secretNumber ? '#236489' : '#553509';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.score').textContent = 0;
        // document.querySelector('.message').textContent = '💥 Game over';
        displayMessage('💥 Game over');
      }
    }
  }

  /*
  //The original code
  // When guess is too low
  
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#553509';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 Game over';
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      document.querySelector('body').style.backgroundColor = '#236489';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 Game over';
    }
  }
    
}
  */
);

//coding challenge

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:
1) Select the element with the 'again' class and attach a click event handler
2) In the handler function, restore initial values of the score and secretnumber variables
3) restore the initial conditions of the message, number, score and guess input field
4) also restore the original background color (#222) and number width (15rem).
*/

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

console.log(typeof 'reset');
