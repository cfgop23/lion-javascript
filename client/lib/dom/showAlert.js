import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

export function showAlert(node, message = '에러입니다!', duration = '1000') {
  if (typeof node === 'string') node = getNode(node);

  node.textContent = message;
  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, duration);
}
