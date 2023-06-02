const resultElement = document.querySelector('.js-result');
const moveElement = document.querySelector('.js-move');
const scoreElement = document.querySelector('.js-score');

//console.log(document.querySelector('.score'))


const audio = new Audio("enna-sound.mp3");
function fckBitch() {
  audio.play();
  console.log('F*cking Bitch')
}
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  console.log(score);
  scoreElement.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  alert('Score was reset');
};



//    function showScore() {
//      alert(`Now Score is Wins: ${score.wins}, Lossse: ${score.losses}, Ties: ${score.ties}`);
//    };


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

  moveElement.innerHTML = `You picked <img src="/SuperPractice/asset/${playerMove}-emoji.png" class="move-icon"> - <img src="/SuperPractice/asset/${compMove}-emoji.png" class="move-icon"> Computer`;
  scoreElement.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  localStorage.setItem('score', JSON.stringify(score));


  //alert(`You picked ${playerMove} \nComputer picked ${compMove} \n${result} \nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

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