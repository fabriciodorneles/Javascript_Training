'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRollDiceEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const btnNewGameEl = document.querySelector('.btn--new');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let activePlayer = 0;
let currentValue = 0;
let Score0 = 0;
let Score1 = 1;
let endGame = false;

const initializeGame = () => {
  activePlayer = 0;
  currentValue = 0;
  Score0 = 0;
  Score1 = 1;
  endGame = false;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  currentScore0El.textContent = currentValue;
  currentScore1El.textContent = currentValue;
};

initializeGame();

btnNewGameEl.addEventListener('click', () => {
  initializeGame();
});

btnRollDiceEl.addEventListener('click', () => {
  if (!endGame) {
    const diceValue = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `dice-${diceValue}.png`;
    diceEl.classList.remove('hidden');
    if (diceValue === 1) {
      currentValue = 0;
      currentScore0El.textContent = currentValue;
      activePlayer = !activePlayer;
      if (activePlayer) {
        player0El.classList.remove('player--active');
        currentScore0El.textContent = currentValue;
        player1El.classList.add('player--active');
      } else {
        player1El.classList.remove('player--active');
        currentScore1El.textContent = currentValue;
        player0El.classList.add('player--active');
      }
    } else if (!activePlayer) {
      currentValue = currentValue + diceValue;
      currentScore0El.textContent = currentValue;
    } else {
      currentValue = currentValue + diceValue;
      currentScore1El.textContent = currentValue;
    }
  }
});

btnHoldEl.addEventListener('click', () => {
  if (!endGame) {
    if (!activePlayer) {
      Score0 = Score0 + currentValue;
      score0El.textContent = Score0;
      if (Score0 >= 100) {
        player0El.classList.add('player--winner');
        endGame = true;
        return;
      }
      activePlayer = 1;
      currentValue = 0;
      currentScore0El.textContent = currentValue;
      player0El.classList.remove('player--active');
      player1El.classList.add('player--active');
    } else {
      Score1 = Score1 + currentValue;
      score1El.textContent = Score1;
      if (Score1 >= 100) {
        player1El.classList.add('player--winner');
        endGame = true;
        return;
      }
      activePlayer = 0;
      currentValue = 0;
      currentScore1El.textContent = currentValue;
      player1El.classList.remove('player--active');
      player0El.classList.add('player--active');
    }
  }
});
