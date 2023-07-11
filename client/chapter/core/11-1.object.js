/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// authorization: 권힌
// authentication: 인증

authUser = {
  uid: 'user-id-avkjlEel!23',
  name: 'beom',
  email: 'beom123@gmail.com',
  isSignIn: true,
  permission: 'paid', // free | paid
};

// console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.permission);
// console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['uid']);
// console.log(authUser['permission']);
// console.log(authUser['email']);

// 계산된 프로퍼티 (computed property)
let computedProperty = 'tel'; // phone | tel

function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-1234-5678'
) {
  return {
    // shorthand property (단축 프로퍼티)
    name,
    email,
    [computedProp]: number,
  };
}

const user1 = createUser('진승', 'abc123@gmail.com', computedProperty);
// console.log(user1[computedProperty]);

// 프로퍼티 포함 여부 확인
for (const key in user1) {
  if (Object.hasOwnProperty.call(user1, key)) {
    // console.log(key);
  }
}

// 프로퍼티 나열
const keyArray = Object.keys(authUser);
const valueArray = Object.values(authUser);

// getProp(object)
function getProp(obj) {
  if (typeof obj !== 'object') {
    throw new Error('getProp 함수의 인자는 객체 타입입니다.');
  }

  return Object.keys(obj);
}

// 프로퍼티 제거(remove) or 삭제(delete)
//        ㄴnull          ㄴ완전히 없앰
authUser.name = null; // 제거(key는 있지만 value를 없앰)
delete authUser.uid; // 삭제(property 전체를 없앰)

// 제거 함수
function removeProperty(obj, key) {
  if (typeof obj !== 'object') {
    throw new Error('getProp 함수의 첫번째 인자는 객체 타입입니다.');
  }
  if (typeof key !== 'string') {
    throw new Error('getProp 함수의 두번째 인자는 string 타입입니다.');
  }

  if (key === 'all') {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        obj[key] = null;
      }
    }
    return obj;
  } else {
    return (obj[key] = null);
  }
}

// 삭제 함수
function deleteProperty(obj, key) {
  if (isEmptyObject(obj)) return;
  return delete obj[key];
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};
console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
const isEmptyObject = function (obj) {
  // return Object.keys(obj).length === 0 ? true : false;
  // return Object.keys(obj).length === 0;
  return !Object.keys(obj).length;
};

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
let color = ['#ff0000', '#2b00ff', '#00ff2f'];

// let red = color[0];
// let blue = color[1];
// let green = color[2];

// let [red, blue, green] = color;
let [, , green] = color;

for (const [key, value] of Object.entries(student)) {
  console.log(key, value);
}

const [a, b, c, d] = document.querySelectorAll('nav li button');

a.addEventListener('click', () => {});
b.addEventListener('click', () => {});
c.addEventListener('click', () => {});
d.addEventListener('click', () => {});

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
};

// const 권혜미 = salaries.권혜미;
// const 이수연 = salaries.이수연;
// const 강예나 = salaries.강예나;
// const 김태일 = salaries.김태일;

const { 권혜미, 이수연, 강예나, 김태일 } = salaries;

console.log(권혜미);

const defaults = {
  width: 100,
  height: 200,
  overflow: false,
  color: 'orange',
};

function setElementCss(options) {
  const { width: w = 0, height: h, overflow, color: c = '#fff' } = options;
  console.log(w);
}

setElementCss(defaults); // 객체를 인수로 하면 순서가 상관이 없다
setElementCss({
  height: 100,
  color: 'red',
  overflow: true,
});

// 배열 구조 분해 할당 - 순서가 정해져 있고 변수 이름을 바꿀 수 있다.
// 객체 구조 분해 할당 - 순서가 정해져 있지 않지만 변수 이름을 바꿀 수 있을까? yes
