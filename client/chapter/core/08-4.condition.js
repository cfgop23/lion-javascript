/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

receivedEmailAddress = emailAddress ?? 'user@company.io';
// 값이 false라도 첫번째 반환
receivedEmailAddress = emailAddress || 'user@company.io';
// 값이 false면 두번째 반환

// Logical Assignment Operators (최신문법)
let x = 0;
let y = 1;

x ||= y; // x = x || y; x가 false일 때 y값을 x에 할당 // 1
x &&= y; // x = x && y; x가 true일 때 y값을 x에 할당 // 0
x ??= y; // x 가 undefined, null 일 때 y 값을 x 에 할당
