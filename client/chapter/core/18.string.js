/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
message[0] = 'A'; // X

// 부분 문자열 추출
let slice = message.slice(8, -1);
console.log(slice);

let subString = message.substring(4, -1);
console.log(subString);

let subStr = message.substr(1, 2); // 잘 안씀

// 문자열 포함 여부 확인
let indexOf = message.indexOf('s');
console.log(indexOf);

let lastIndexOf = message.lastIndexOf('s');
console.log(lastIndexOf);

let includes = message.includes('less');
console.log(includes);

let startsWith = message.startsWith('a');
console.log(startsWith);

let endsWith = message.endsWith('.');
console.log(endsWith);

// 공백 잘라내기
let str = '   a  b  c d  f             g     ';
let trimStart = str.trimStart();
let trimEnd = str.trimEnd();
let trim = str.trim();
console.log(trim);

// 공백 중간을 삭제
let replace = str.replace(/\s*/g, '');
console.log(replace);

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
