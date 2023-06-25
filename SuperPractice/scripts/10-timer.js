const hoursEl = document.querySelector('.js-hours');
const minutesEl = document.querySelector('.js-minutes');
const secondsEl = document.querySelector('.js-seconds');
const startButton = document.querySelector('.js-start-timer');
const stopButton = document.querySelector('.js-stop-timer');
const resetButton = document.querySelector('.js-reset-timer');

let timerID;
let checkTimer = false;
let s = 0;
let m = 0;
let h = 0;

function startTimer() {

  timerID = setInterval(() => {

    s++;
    s = s < 10 ? "0" + s : s;
    secondsEl.innerHTML = s + ' S';

    if (s > 60) {
      s = 0;
      m++;
      m = m < 10 ? "0" + m : m;
      minutesEl.innerHTML = m + ' M';
    } else if (m > 60) {
      m = 0;
      h++;
      h = h < 10 ? "0" + h : h;
      hoursEl.innerHTML = h + ' H';
    };
  }, 1000);
};

function resetTimer() {
  clearInterval(timerID);
  s = 0; secondsEl.innerHTML = s + '0 S';
  m = 0; minutesEl.innerHTML = m + '0 M';
  h = 0; hoursEl.innerHTML = h + '0 H';
}

startButton.addEventListener('click', () => {
  startTimer();
})
stopButton.addEventListener('click', () => {
  clearInterval(timerID);
})
resetButton.addEventListener('click', () => {
  resetTimer();
})
