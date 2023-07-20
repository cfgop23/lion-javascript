/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener(
  'click',
  () => {
    console.log('%c section', 'color:orange');
  },
  true // 캡처링: 아래에서 위로 겹치게 거꾸로 바꿈
);
// 버블링: 위에서 아래로 겹치는 현상

article.addEventListener(
  'click',
  () => {
    console.log('%c article', 'color:dodgerblue');
  },
  true
);

p.addEventListener(
  'click',
  (e) => {
    e.stopPropagation(); // 버블링 막는 메서드
    console.log('%c p', 'color:hotpink');
  },
  true
);

/* 캡처링 ----------------------------------------------------------------- */
