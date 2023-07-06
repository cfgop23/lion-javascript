/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

/* let repeat = 0;
while (repeat < 10) {
  console.log(repeat);
  repeat++;
} */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]);
console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

console.log('---순방향---');
let z1 = performance.now();
let i = 0;
while (i < frontEndDev.length) {
  let value = frontEndDev[i]; // 성능때문에 변수에 담아 쓰는게 좋음
  console.log(value);
  i++;
}
let z2 = performance.now();

// while 문 (역순환 : 역방향)
console.log('---역방향---');
let j = frontEndDev.length - 1;
while (j >= 0) {
  let value = frontEndDev[j];
  console.log(value);
  j--;
}

// 원본 파괴
// 배열의 깊은 복사
let copyArr = frontEndDev.slice(); // old
copyArr = [...frontEndDev]; // new

while (copyArr.length) {
  console.log(copyArr.pop());
}

// 성능 진단 : 순환 vs. 역순환
console.log(z2 - z1);
// 역방향이 성능이 더 좋음
