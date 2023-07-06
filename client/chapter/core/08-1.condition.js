/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/* let jsName = prompt("자바스크립트의 '공식'이름은 무엇일까요?", '');
if (jsName.toLowerCase() === 'ecmascript') {
  console.log('정답입니다!');
} else {
  console.log('모르셨나요? 정답은 ECMAScript입니다!');
} */

/* let num = prompt('숫자 하나만 입력하세요', 0);
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
} */

/* let a = +prompt('숫자를 입력하세요.');
let b = +prompt('숫자를 입력하세요.');
let result = a + b < 4 ? '미만' : '이상';
console.log(result); */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?');

// 영화 볼거니?

// if 문(statement)
if (!didWatchMovie) {
  let goingToWatchMovie = confirm('영화 볼거니?');

  if (goingToWatchMovie) {
    let withWho = prompt('누구랑 볼거니?', '');

    if (withWho === '여자친구') {
      console.log('그래');
    } else if (withWho === '가족') {
      console.log('화목하네');
    }
  }
} else {
  let alone = confirm('혼자 봤니?');
  if (alone) {
    let didCry = confirm('너 울었니?');

    if (didCry) {
      console.log('너 F야?');
    } else {
      console.log('너 T야?');
    }
  }
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
