'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

// Restart game
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No Input
  if (!guess) {
    displayMessage('❌ No Number! ❌');

    // Player Wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Guess too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber
          ? '👇 The number is bigger.'
          : '👆 The number is lower.'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game! 😒');
      document.querySelector('.score').textContent = 0;
    }
  }
});
