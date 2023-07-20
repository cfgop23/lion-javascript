/* eslint-disable */
/* eslint-enable */
// /* eslint no-unused-vars: 0 */ 주석에 직접 rule을 적용할 수도 있다.

import {
  getNode,
  getNodes,
  clearContents,
  insertLast,
} from './lib/dom/index.js';

// function page1() {
const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');

function handleInput() {
  const total = +first.value + +second.value;

  // result.textContent = total;
  clearContents(result);
  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();
  clearContents(first);
  clearContents(second);
  clearContents(result);
  result.textContent = '-';
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
// }

function page2() {
  const calculator = getNode('.calculator');
  const clear = getNode('#clear');
  const result = getNode('.result');
  const numberInputs = Array.from(getNodes('input:not(#clear)'));

  console.log(numberInputs);

  function handleInput() {
    const total = numberInputs.reduce(
      (total, input) => total + Number(input.value),
      0
    );

    console.log();

    clearContents(result);
    insertLast(result, total);
  }

  function handleClick() {
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClick);
}
