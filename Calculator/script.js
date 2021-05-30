const btnClear = document.querySelector('#clear');
const display = document.querySelector('#display');
const fullDisplay = document.querySelector('#full-display');
const btnEquals = document.querySelector('#equals');
const btnDecimal = document.querySelector('#decimal');
var isShowResult = false;

function isCal(cal) {
  if (cal === '+' || cal === '-' || cal === '*' || cal === '/') return true;
  return false;
}

const btnCals = [
  {
    btnCal: document.querySelector('#add'),
    cal: '+',
  },
  {
    btnCal: document.querySelector('#subtract'),
    cal: '-',
  },
  {
    btnCal: document.querySelector('#multiply'),
    cal: '*',
  },
  {
    btnCal: document.querySelector('#divide'),
    cal: '/',
  },
];

const num = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

for (let i = 0; i < num.length; i++) {
  let btnNum = document.querySelector(`#${num[i]}`);
  btnNum.addEventListener('click', function () {
    if (isShowResult) {
      display.innerHTML = i;
      fullDisplay.innerHTML = i;
      isShowResult = false;
      return;
    }
    var preTex = display.innerHTML;
    if (preTex === '0') {
      display.innerHTML = String(i);
      fullDisplay.innerHTML = String(i);
    } else if (isCal(preTex)) {
      display.innerHTML = String(i);
      fullDisplay.innerHTML = fullDisplay.innerHTML + String(i);
    } else {
      display.innerHTML = preTex + String(i);
      fullDisplay.innerHTML = fullDisplay.innerHTML + String(i);
    }
  });
}

for (let i = 0; i < btnCals.length; i++) {
  btnCals[i]['btnCal'].addEventListener('click', function () {
    if (isShowResult) {
      fullDisplay.innerHTML = display.innerHTML + btnCals[i]['cal'];
      display.innerHTML = btnCals[i]['cal'];
      isShowResult = false;
      return;
    }
    let preText = display.innerHTML;
    let fullText = fullDisplay.innerHTML;
    if (
      isCal(fullText[fullText.length - 1]) &&
      isCal(fullText[fullText.length - 2])
    ) {
      if (btnCals[i]['cal'] === '-') return;
      display.innerHTML = btnCals[i]['cal'];
      fullDisplay.innerHTML =
        fullText.slice(0, fullText.length - 2) + btnCals[i]['cal'];
    }
    if (isCal(preText)) {
      if (btnCals[i]['cal'] === '-') {
        display.innerHTML = '-';
        fullDisplay.innerHTML = fullDisplay.innerHTML + '-';
      } else {
        display.innerHTML = btnCals[i]['cal'];
        let temp = fullDisplay.innerHTML;
        fullDisplay.innerHTML =
          temp.slice(0, temp.length - 1) + btnCals[i]['cal'];
      }
      return;
    }
    display.innerHTML = btnCals[i]['cal'];
    fullDisplay.innerHTML = fullDisplay.innerHTML + btnCals[i]['cal'];
  });
}

btnDecimal.addEventListener('click', function () {
  let preTex = display.innerHTML;
  if (preTex.includes('.')) return;
  if (preTex === '+' || preTex === '-' || preTex === '*' || preTex === '/') {
    display.innerHTML = '0.';
    fullDisplay.innerHTML = fullDisplay.innerHTML + '0.';
    return;
  }
  display.innerHTML = preTex + '.';
  fullDisplay.innerHTML = fullDisplay.innerHTML + '.';
});

btnClear.addEventListener('click', function () {
  display.innerHTML = 0;
  fullDisplay.innerHTML = 0;
  isShowResult = false;
});

btnEquals.addEventListener('click', function () {
  const string = fullDisplay.innerHTML;
  let result = eval(string);
  display.innerHTML = result;
  fullDisplay.innerHTML = `${fullDisplay.innerHTML}=${result}`;
  isShowResult = true;
});

display.addEventListener('change', function () {
  console.log('Display change');
});
