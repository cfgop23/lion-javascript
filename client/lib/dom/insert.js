function insertBefore(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== 1)
    throw new ReferenceError(
      'insertBefore 함수의 첫번째 인자 node는 ELEMENT NODE 이어야 합니다.'
    );

  node.insertAdjacentHTML('beforebegin', text);
}

function insertFirst(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== 1)
    throw new ReferenceError(
      'insertFirst 함수의 첫번째 인자 node는 ELEMENT NODE 이어야 합니다.'
    );

  node.insertAdjacentHTML('afterbegin', text);
}

function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== 1)
    throw new ReferenceError(
      'insertLast 함수의 첫번째 인자 node는 ELEMENT NODE 이어야 합니다.'
    );

  node.insertAdjacentHTML('beforeend', text);
}

function insertAfter(node, text) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeType !== 1)
    throw new ReferenceError(
      'insertAfter 함수의 첫번째 인자 node는 ELEMENT NODE 이어야 합니다.'
    );

  node.insertAdjacentHTML('afterend', text);
}
