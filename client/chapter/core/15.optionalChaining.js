/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan.photos?.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

const button = document.querySelector('.button');

console.log(button);

button?.addEventListener('click', function () {
  this.style.backgroundColor = 'orange';
});

//

const timer = setTimeout(() => {
  const button = `
    <button type="button">clickMe</button>
  `;

  document.body.insertAdjacentHTML('beforeend', button);
}, 5000);

clearTimeout(timer);

//

let count = 0;
setInterval(() => {
  // console.log(++count);
}, 1000);

// requestAnimationFrame() // 재귀(애니메이션 제어할 때 사용) - 모니터 주사율따라 프레임이 달라짐
