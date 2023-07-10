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
console.log(result);

function Button() {}

const a = Button();
const b = new Button(); // 객체로 생성(constructor가 내장돼있어서 가능)

// 화살표 함수와 this

// 함수 선언문
function normalFunc() {
  console.log(this);
}

window.normalFunc();

// 함수표현식
const expressionFunc = function () {
  console.log(this);
};

// 화살표함수식

const arrowFunc = () => {
  console.log(this);
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
