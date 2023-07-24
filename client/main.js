import {
  attr,
  clearContents,
  diceAnimation,
  endScroll,
  getNode,
  getNodes,
  insertLast,
  memo,
} from './lib/index.js';

const [startBtn, recordBtn, resetBtn] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');
let count = 0;
let total = 0;

function createItem(value) {
  return /* html */ `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>
`;
}

function renderRecordItem() {
  const diceValue = +attr(memo('cube'), 'data-dice');

  insertLast(tbody, createItem(diceValue));
  endScroll(recordListWrapper);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopDice;

  return () => {
    if (!isClicked) {
      stopDice = setInterval(diceAnimation, 100);
      recordBtn.disabled = true;
      resetBtn.disabled = true;
    } else {
      clearInterval(stopDice);
      recordBtn.disabled = false;
      resetBtn.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;
  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  recordBtn.disabled = true;
  resetBtn.disabled = true;

  clearContents(tbody);
  count = 0;
  total = 0;
}

startBtn.addEventListener('click', handleRollingDice);
recordBtn.addEventListener('click', handleRecord);
resetBtn.addEventListener('click', handleReset);
