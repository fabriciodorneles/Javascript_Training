'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '30';

//document.querySelector('.guess').value = '23';
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No Input
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number! ❌';

    // Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';

    // Guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '👇 The number is bigger.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game! 😒';
      document.querySelector('.score').textContent = 0;
    }

    // Guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '👆 The number is lower.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game! 😒';
      document.querySelector('.score').textContent = 0;
    }
  }
});
