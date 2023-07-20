function getAttr(node, prop) {
  if (typeof prop !== 'string')
    throw new TypeError(
      'getAttr 함수의 두번째 인자 property는 string 타입입니다.'
    );

  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof prop !== 'string') {
    throw new TypeError('setAttr 함수의 두번째 인자 prop은 string 타입입니다.');
  }

  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!node[prop] && prop !== 'class') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

function attr(node, prop, value) {
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}
