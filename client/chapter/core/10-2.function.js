/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // arguments: 함수 안에서 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 것
  let total = 0;

  /* for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  } */

  /* for (const el of arguments) {
    total += el;
  } */

  /* Array.prototype.forEach.call(arguments, function (item) {
    total += item;
  }); */

  /* const realArray = Array.prototype.slice.call(arguments);
  realArray.forEach((item) => {
    total += item;
  }); */

  /* const realArray = Array.from(arguments);
  realArray.forEach((item) => {
    total += item;
  }); */

  const realArray = [...arguments];
  // realArray.forEach((item) => {
  //   total += item;
  // });

  total = realArray.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return total;
};

const result = calculateTotal(1000, 500, 200, 6500, 200);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (callback) {
  callback();
};
callbackFunctionExpression(function () {
  console.log('콜백함수 실행');
});

const movePage = function (url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    // success(url)
  } else {
    // fail()
  }
};

movePage(
  'www.naver.com',
  function (url) {
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');

    setTimeout(() => {
      window.location.href = url;
    }, 3000);
  },
  function () {
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 변수의 보호(var 호이스팅 막기 위해) - 은닉화(encapsulation(캡슐화))
let IIFE;
(function () {
  console.log('즉시 실행');

  return 'aa'; // 변수 선언하지 않으면 리턴값을 못 받음
})();

// import { css as c } from 'css.js'; // 모듈화
// c();

const MASTER = (function (g) {
  console.log(g);

  var x = 10;
  let uid = 'Ajttk753!@';

  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      uid = value;
    },
  };
})(window);

console.log(MASTER.setKey('새로운 비밀번호'));
