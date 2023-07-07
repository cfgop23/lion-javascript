/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  // hasOwnProperty() {
  //   return '본래 기능을 잃어버리고 덮어쓰기 돼버림';
  // },
};

// in 문: 객체 안에 내가 원하는 값(property)이 있어?
// const key = 'creator';
let key = 'valueOf'; // true;
key = 'toString'; // true;
// console.log(key in javaScript);
// in 문은 prototype 속성도 전부 찾음

// ------------------------------------------------------------------------
// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
// ------------------------------------------------------------------------
Object.prototype.nickName = 'tiger';

// ------------------------------------------------------------------------
// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// ------------------------------------------------------------------------
key = 'toString'; // false
key = 'createAt'; // true
key = 'nickName'; // false
// console.log(javaScript.hasOwnProperty(key)); // 직접 prototype 메서드를 쓰면 eslint 에러남
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key)); // call - 빌려쓸 수 있게 해주는 메서드

// ------------------------------------------------------------------------
// for ~ in 문
// ------------------------------------------------------------------------
// - 객체 자신의 속성만 순환하려면?
for (const key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// - 배열 객체 순환에 사용할 경우?
const tens = [10, 100, 1000, 10000];

for (const key in tens) {
  if (Object.hasOwnProperty.call(tens, key)) {
    console.log(tens[key]);
  }
}
// for ~ in 은 객체를 순환하는 용도로 사용이 가능
// 배열은 할 수는 있지만 순서를 보장하지 않아서 사용 x(배열은 for ~ of 사용)
