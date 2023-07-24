import {
  clearContents,
  copy,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  shake,
  showAlert,
} from './lib/index.js';
import { jujeobData } from './data/data.js';

const nameField = getNode('#nameField');
const submit = getNode('#submit');
const resultArea = getNode('.result');

const handleSubmit = (e) => {
  e.preventDefault();

  const name = nameField.value;
  const list = jujeobData(name);
  const random = getRandom(list.length);
  const pick = list[random];

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '이름을 입력해 주세요!', 3000);
    shake.restart();

    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '제대로 된 이름을 입력해 주세요!', 3000);
    shake.restart();

    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
};

function handleCopy() {
  const text = resultArea.textContent;

  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!', 3000);
  });
}

submit.addEventListener('click', handleSubmit);
resultArea.addEventListener('click', handleCopy);
