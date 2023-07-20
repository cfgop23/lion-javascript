function bindEvent(node, type, handler) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!/mouseenter|click|mousemove|mouseout|mouseover\b/g.test(type)) {
    throw new TypeError(
      'bindEvent 함수의 두번째 인자는 유효한 이벤트타입이어야 합니다'
    );
  }
  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}
