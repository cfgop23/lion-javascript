/* class */
function addClass(node, name) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof name !== 'string')
    throw new TypeError(
      'addClass 함수의 두번째 인자 name은 string 타입입니다.'
    );

  node.classList.add(name);
}

function removeClass(node, name) {
  if (typeof node === 'string') node = getNode(node);
  if (!name) {
    node.className = '';
    return;
  }
  if (typeof name !== 'string')
    throw new TypeError(
      'removeClass 함수의 두번째 인자 name은 string 타입입니다.'
    );

  node.classList.remove(name);
}

function toggleClass(node, name) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof name !== 'string')
    throw new TypeError(
      'toggleClass 함수의 두번째 인자 name은 string 타입입니다.'
    );

  return node.classList.toggle(name);
}

/* css */
function getCss(node, prop) {
  if (typeof node === 'string') node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'getCss 함수의 두번째 인자 prop은 유효한 css 속성이 아닙니다.'
    );
  }

  return getComputedStyle(node).getPropertyValue(prop);
}

//

function setCss(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'setCss 함수의 두번째 인자 prop은 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value)
    throw new SyntaxError('setCss 함수의 세번째 인자 value는 필수값입니다.');

  if (typeof value !== 'string')
    throw new TypeError('setCss 함수의 세번째 인자 value는 string 타입입니다.');

  node.style[prop] = value;
}

//

const css = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
};

// function css(node, prop, value) {
//   if (!value) {
//     return getCss(node, prop);
//   }

//   setCss(node, prop, value);
// }
