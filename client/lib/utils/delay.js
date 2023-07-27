import { getNode, insertLast } from '../dom/index.js';
import { xhrPromise } from './xhr.js';

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   console.log(1);
//   first.style.top = '-100px';

//   delay(() => {
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';

//     delay(() => {
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     });

//     second.style.top = '100px';
//   });
// });

/* promise-------------------------------------------- */
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (typeof options === 'number') {
    config.timeout = options;
  }
  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, timeout, data, errorMessage } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) resolve(data);
      else reject({ message: errorMessage });
    }, timeout);
  });
}

delayP({
  data: { name: 'tiger' },
  shouldReject: true,
})
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => {
    // console.log(err.message);
  })
  .finally(() => {
    // console.log('어쨌든 실행됩니다.');
  });

/* async await-------------------------------------------- */

async function delayA() {
  return '성공!';
}

const data = await delayA();
// console.log(data);
// await는 뒤가 promise 객체면 async 함수 밖에서도 사용 가능

async function getUserData() {
  const data = xhrPromise.get('https://jsonplaceholder.typicode.com/users');

  // data.then((res) => {
  //   console.log(res);
  // });

  const result = await data;
  // console.log(result);
}

// getUserData();

async function getData() {
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/25');

  // data.then((res)=>{
  //   console.log( res );
  // })

  const pokemon = await data;

  insertLast(
    document.body,
    `<img src="${pokemon.sprites['front_default']}" alt="" />`
  );
}

// getData();
