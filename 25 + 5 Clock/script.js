const btnIncreBreak = document.querySelector('#break-increment');
const btnDecreBreak = document.querySelector('#break-decrement');
const btnIncreSession = document.querySelector('#session-increment');
const btnDecreSession = document.querySelector('#session-decrement');
const btnStartStop = document.querySelector('#start_stop');
const btnReset = document.querySelector('#reset');

const breakLength = document.querySelector('#break-length');
const sessionLength = document.querySelector('#session-length');
const timeLeft = document.querySelector('#time-left');

var status = 'begin'; //runing - stop - begin
var timer;
var isBreak;

console.log({
  sessionLength,
});
btnIncreBreak.addEventListener('click', function () {
  if (status === 'runing') return;
  breakLength.innerHTML = breakLength.innerHTML * 1 + 1;
});
btnDecreBreak.addEventListener('click', function () {
  if (status === 'runing') return;
  if (breakLength.innerHTML <= 1) {
    breakLength.innerHTML = 1;
    return;
  }
  breakLength.innerHTML = breakLength.innerHTML * 1 - 1;
});

btnIncreSession.addEventListener('click', function () {
  if (status === 'runing') return;
  sessionLength.innerHTML = sessionLength.innerHTML * 1 + 1;
  timeLeft.innerHTML = sessionLength.innerHTML + ':00';
});
btnDecreSession.addEventListener('click', function () {
  if (status === 'runing') return;
  if (sessionLength.innerHTML <= 1) {
    sessionLength.innerHTML = 1;
    // return;
  } else {
    sessionLength.innerHTML = sessionLength.innerHTML * 1 - 1;
  }
  timeLeft.innerHTML = sessionLength.innerHTML + ':00';
});

btnStartStop.addEventListener('click', function () {
  if (status === 'begin' || status === 'stop') {
    status = 'runing';
    timer = setInterval(() => {
      let newTime = decreaseTime(timeLeft.innerHTML);
      timeLeft.innerHTML = newTime;
      if (newTime === '-1:59' && !isBreak) {
        // clearInterval(timer);
        isBreak = true;
        timeLeft.innerHTML = breakLength.innerHTML + ':00';
      } else if (newTime === '-1:59' && isBreak) {
        clearInterval(timer);
      }
    }, 1000);
  } else {
    clearInterval(timer);
    status = 'stop';
  }
  console.log(status);
});

btnReset.addEventListener('click', function () {
  breakLength.innerHTML = 5;
  sessionLength.innerHTML = 25;
  timeLeft.innerHTML = '25:00';
  status = 'begin';
  clearInterval(timer);
});

function decreaseTime(time) {
  var temp = time.split(':');
  temp[1] = temp[1] * 1 - 1;
  if (temp[1] === -1) {
    temp[1] = 59;
    temp[0] = temp[0] * 1 - 1;
  }
  if (temp[1] < 10) {
    return `${temp[0]}:0${temp[1]}`;
  }
  return `${temp[0]}:${temp[1]}`;
}
