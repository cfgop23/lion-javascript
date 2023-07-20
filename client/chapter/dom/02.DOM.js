/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// Document Object Model

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector

const first = getNode('.first');
const span = getNodes('span');

// - querySelectorAll
// - closest: 가장 인접한 부모 태그
console.log(first.closest('h1')); // event delegation

/* 문서 대상 확인 */
// - matches
console.log(first.matches('#message'));

// - contains
// 선택자 자식들 중에 해당 element가 있어?
first.contains(document.querySelector('span'));

// 클래스를 포함하고 있어?
// node.classList.contains()
