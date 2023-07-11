/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, ...args) => {
  //                        ㄴrest parameter(...args, ...rest, ...children 전부 같음)
  // 화살함수는 arguments가 없다

  // return args.reduce(function (acc, cur) {
  //   return acc + cur;
  // }, 0);

  return args.reduce((acc, cur) => acc + cur, 0);
};

const result = calcAllMoney(1000, 500, 200, 2000);
// console.log(result);

// function Button() {}

// const a = Button();
// const b = new Button(); // 객체로 생성(constructor가 내장돼있어서 가능)

const a = document.querySelector('nav li:nth-child(1) button');
const nav = document.querySelectorAll('nav li button');

// 일반함수: 나를 호출한 대상을 this로 바인딩한다
// a.addEventListener('click', function () {
//   a.classList.add('is-active');
// });

// 화살표함수: this를 바인딩하지 않음, 찾아야 한다면 내 부모꺼(상위 실행 컨텍스트) 가져옴
nav.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(this);
  });
});

// 화살표 함수와 this

// 함수 선언문
function normalFunc() {
  console.log(this); // window
}

// window.normalFunc();

// 함수표현식
const expressionFunc = function () {
  console.log(this); // window
};

// 화살표함수식

const arrowFunc = () => {
  console.log(this); // window
};

// 객체 안에서 this
// 객체의 메서드를 정의할 때는 화살표 함수보다 일반 함수가 좋다.
// 메서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋다.
const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시',
  grades: [80, 90, 100],
  totalGrades: function () {
    // this.grades.forEach((item) => {
    //   this.total += item;
    // });

    function sayHi() {
      console.log(this);
    }
    sayHi(); // 누구에 의해 실행된게 아니라 window

    const sayHello = () => {
      console.log(this); // 상위 컨텍스트인 totalGrades 함수의 this를 반환
    };
    sayHello();
  },
  // totalGrades() {
  //   console.log(this);
  // }, // 축약형
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
