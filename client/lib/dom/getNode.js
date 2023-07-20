function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인자는 문자 타입입니다.');
  }

  return document.querySelector(node);
}

// 여러 요소를 잡을 경우
function getNodes(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인자는 문자 타입입니다.');
  }

  return document.querySelectorAll(node);
}
