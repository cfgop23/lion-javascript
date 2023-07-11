/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */

// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao',
};

let text = message;

let conversationTool = messenger;
// conversationTool.name = 'line';
// delete conversationTool.name;

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
// 1. for ~ in 문을 사용한
// 얕은 복사
const copyObj1 = {};

for (const key in messenger) {
  if (Object.hasOwnProperty.call(messenger, key)) {
    copyObj1[key] = messenger[key];
  }
}

// 2. Object.assign()을 사용한 복사
const copyObj2 = Object.assign({}, messenger);

// 3. 전개 연산자(...)를 사용한 복사
const copyObj3 = { ...messenger };

// 4. 객체를 복사해주는 유틸 함수
const copiedObj = (obj) => ({ ...obj });

const copyObj4 = copiedObj(messenger);
console.log(copyObj4);

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

let combinedCssMap1 = { ...cssMapA, ...cssMapB }; // key가 겹칠 경우 뒤가 우선순위가 높다.(덮어씌어짐)
let combinedCssMap2 = Object.assign({}, cssMapA, cssMapB);

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copyedContainerStyles = { ...containerStyles }; // 얕은 복사
// 중첩객체일 경우 얕은 복사를 하면 원본의 하위 객체가 복사되지 않고 참조만 됨

// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

console.log(containerStyles);

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
