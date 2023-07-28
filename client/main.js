import { deleteStorage, getNode, getStorage, setStorage } from './lib/index.js';

const textField = getNode('#textField');
const clear = getNode('.clear');

function init() {
  getStorage('text').then((res) => {
    textField.value = res;
  });
}

function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}

function handleClear() {
  deleteStorage('text').then(() => {
    textField.value = '';
  });
}

window.addEventListener('DOMContentLoaded', init);
textField.addEventListener('input', handleTextField);
clear.addEventListener('click', handleClear);
