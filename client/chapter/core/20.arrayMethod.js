/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

Array.isArray([]);

const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

/* 요소 순환 ---------------------------- */
const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

// forEach
people.forEach((item, index) => {
  console.log(item.name);
});

// 이벤트 처리 방식
// 이벤트 위임 event delegation(나중에 배울 것)

const span = document.querySelectorAll('span');

span.forEach((item, index) => {
  item.addEventListener('click', function () {
    console.log(this, index);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse
// arr.reverse();

// splice
arr.splice(1, 0, 5, 13);

// sort
arr.sort((a, b) => a - b); // compare function
// 반환 값 < 0: a가 b보다 앞에 있어야 한다.
// 반환 값 === 0: a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0: b가 a보다 앞에 었어야 한다.

/* 새로운 배열 반환(원본훼손 x) ------------------------ */
// concat
const user = ['선범', '효윤', '준석'];
// const newArr = arr.concat(people, user, 'a');
const newArr = [...arr, ...user, 'a'];
// console.log(newArr);

// slice
const slice = arr.slice(2, 5);

// toSorted
const toSorted = arr.toSorted((a, b) => a - b);

// toReversed
const toReversed = arr.toReversed();

// toSpliced
const toSpliced = arr.toSpliced(2, 0, 'js', 'css', 'react');

// map
/* const job = people.map((el, i) => {
  return `<div>${el.profession}</div>`;
});

job.forEach((el) => {
  document.body.insertAdjacentHTML('beforeend', el);
}); */
// map은 return이 필요, forEach는 필요 없음

const job = people.map((item, index) => {
  return `
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `;
});

job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
arr.indexOf(10);

// lastIndexOf
arr.lastIndexOf(10);

// includes
arr.includes(1000);

/* 요소 찾기 ------------------------------ */

// find - 해당 아이템을 반환
const find = people.find((el) => {
  return el.id > 1;
});

// findIndex
const findIndex = people.findIndex((el) => {
  return el.id === 3;
});

/* 요소 걸러내기 --------------------------- */

// filter: 배열을 반환
const filter = people.filter((item) => {
  return item.id > 2;
});

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
// reduce의 초기값은 설정 안해주면 첫번째 element를 acc로 할당한다.

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);

document.body.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */
const str = 'a b c d e f g';

// split
const stringToArray = str.split(' ');

// join
const arrayToString = stringToArray.join('-');

console.log(arrayToString);
