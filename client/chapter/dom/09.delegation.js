/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const container = getNode('.container');

// function handleDelegation(e) {
//   // console.log(this === e.currentTarget);
//   // console.log(e.currentTarget, e.target);

//   let target = e.target;
//   let className = attr(target, 'class');

//   if (className === 'a') console.log('a버튼 클릭');
//   if (className === 'b') console.log('b버튼 클릭');
//   if (className === 'c') console.log('c버튼 클릭');
//   if (className === 'd') console.log('d버튼 클릭');
// }

/* 속성을 사용한 위임 ------------------ */

function handleDelegation(e) {
  let target = e.target;
  let li = target.closest('li');

  if (!li) return;

  // let dataName = target.dataset.name;
  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  if (className === 'home') console.log('홈 실행');
  if (className === 'about') console.log('어바웃 실행');
  if (className === 'project') console.log('프로젝트 실행');
  if (className === 'contact') console.log('컨택트 실행');
}

container.addEventListener('click', handleDelegation);
/* 노드를 사용한 위임 ------------------ */
