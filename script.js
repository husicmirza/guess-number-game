'use strict';
//document.querySelector('.guess').value = 10;
//console.log(document.querySelector('.message').textContent);
//console.log(document.querySelector('.guess').value);
let randomNum = Math.floor(Math.random() * 20 + 1);

let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let highscore = Number(document.querySelector('.highscore').textContent);

  if (!guess) {
    // document.querySelector('.message').textContent = 'Please input the number!';
    displayMessage('Please input the number!');
  } else if (guess !== randomNum) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      displayMessage(guess > randomNum ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //    else if (guess > randomNum) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost';
  //       score--;

  //       document.querySelector('.score').textContent = score;
  //     }
  //   } else if (guess < randomNum) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
  else {
    document.querySelector('.message').textContent =
      'congratulations you guess the number';
    document.querySelector('.number').textContent = randomNum;

    document.querySelector('.guess').disabled = true;
    document.querySelector('body').style.backgroundColor = 'green';
    if (highscore < score)
      document.querySelector('.highscore').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.floor(Math.random() * 20 + 1);
  score = 20;
  console.log(randomNum);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';

  document.querySelector('.guess').disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
});
