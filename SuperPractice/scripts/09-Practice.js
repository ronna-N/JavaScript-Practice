const resultElement = document.querySelector('.js-result');
const moveElement = document.querySelector('.js-move');
const scoreElement = document.querySelector('.js-score');
const rockElement = document.querySelector('.js-rock');
const paperElement = document.querySelector('.js-paper');
const scissorsElement = document.querySelector('.js-scissors');
const resetScoreElement = document.querySelector('.reset-button');
const autoPlayElement = document.querySelector('.js-auto-button');
const confirmationElement = document.querySelector('.confirmation');

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

scoreElement.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  scoreElement.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  confirmationElement.innerHTML = '';
};

function resetConfirmation() {
  confirmationElement.innerHTML = `
  <span>Are you sure to reset the score</span>
  <button class="js-yes">Yes</Button>
  <button class="js-no">No</Button>
  `;

  document.querySelector('.js-yes').addEventListener('click', (event) => {
    resetScore();
  })
  document.querySelector('.js-no').addEventListener('click', () => {
    confirmationElement.innerHTML = '';
  })
}


let isAutoPlaying = false;
let intervalID;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickCompMove();
      playGame(playerMove)
    }, 2000);
    autoPlayElement.innerText = 'Stop Playin';
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    autoPlayElement.innerText = 'Auto Play';
    isAutoPlaying = false;
  }
}

rockElement.addEventListener('click', () => {
  playGame('rock');
});

paperElement.addEventListener('click', () => {
  playGame('paper');
});

scissorsElement.addEventListener('click', () => {
  playGame('scissors');
});

autoPlayElement.addEventListener('click', () => {
  autoPlay();
});

resetScoreElement.addEventListener('click', () => {
  resetConfirmation();
});

document.body.addEventListener('keydown', (event) => {
  //console.log(event.key);
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetConfirmation();
  }
});

function playGame(playerMove) {

  const compMove = pickCompMove();
  let result = '';

  if (playerMove === 'scissors') {

    if (compMove === 'rock') {
      result = 'You lose.';
      console.log('You lose.')

    } else if (compMove === 'paper') {
      result = 'You win.';
      console.log('You win.')

    } else {
      result = 'Tie.';
      console.log('Tie.')
    }

  } else if (playerMove === 'paper') {
    if (compMove === 'rock') {
      result = 'You win.';
      console.log('You win.')
    } else if (compMove === 'paper') {
      result = 'Tie.';
      console.log('Tie.')
    } else {
      result = 'You lose.';
      console.log('You lose.')
    }
  } else if (playerMove === 'rock') {
    if (compMove === 'rock') {
      result = 'Tie.';
      console.log('Tie.')
    } else if (compMove === 'paper') {
      result = 'You lose.';
      console.log('You lose.')
    } else {
      result = 'You win.';
      console.log('You win.')
    }
  }


  if (result === 'You win.') {
    resultElement.innerText = 'You Win';
    score.wins += 1;

  } else if (result === 'You lose.') {
    resultElement.innerText = 'You lose';
    score.losses += 1;

  } else if (result === 'Tie.') {
    resultElement.innerText = 'Tie';
    score.ties += 1;
  }

  moveElement.innerHTML = `You picked <img src="/asset/${playerMove}-emoji.png" class="move-icon"> - <img src="/asset/${compMove}-emoji.png" class="move-icon"> Computer`;
  scoreElement.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  localStorage.setItem('score', JSON.stringify(score));
}

function pickCompMove() {

  const comp = Math.random();
  let compMove = '';

  if (comp >= 0 && comp < 1 / 3) {
    compMove = 'rock'
  } else if (comp >= 1 / 3 && comp < 2 / 3) {
    compMove = 'paper'
  } else {
    compMove = 'scissors'
  }

  console.log('Computer choose ' + compMove)

  return compMove;

  console.log('after');

};