/* 
[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete
*/

import { refError } from '../error/refError.js';

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  // method, url, onSuccess, onFail, body, headers

  const xhr = new XMLHttpRequest();
  // console.log(xhr.readyState); //0
  xhr.open(method, url);
  // console.log(xhr.readyState); // 1
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
  // console.log(xhr.readyState); // 1

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && xhr.status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
    // console.log(xhr.status); // 200 or 404
    // console.log(xhr.readyState); // 2, 3, 4
  });
  xhr.send(JSON.stringify(body));
  // console.log(xhr.readyState); // 1
}

/* callback */
// xhr({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result) {
//     console.log(result);
//   },
//   onFail(err) {
//     console.log(err);
//   },
//   body: {
//     name: 'tiger',
//   },
// });

// 함수도 객체이기 때문에 메서드를 넣을 수 있다.
/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백함수
 * @param {function} onFail 서버와 통신 실패시 실행될 콜백함수
 * @return server data
 */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, onSuccess, onFail, body) => {
  xhr({
    method: 'POST',
    url,
    onSuccess,
    onFail,
    body,
  });
};

xhr.put = (url, onSuccess, onFail, body) => {
  xhr({
    method: 'PUT',
    url,
    onSuccess,
    onFail,
    body,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

// console.dir(xhr);

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// xhr.post(
//   'https://jsonplaceholder.typicode.com/users',
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   },
//   {
//     name: 'tiger',
//   }
// );

// xhr.put(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   },
//   {
//     name: 'aa',
//     age: 22,
//   }
// );

// xhr.delete(
//   'https://jsonplaceholder.typicode.com/users',
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

/* promise API ----------------------------------------------------- */
const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원할하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  const { method, url, body, headers, errorMessage } = {
    ...defaultOptions,
    ...options,
  };

  if (!url) refError('서버와 통신할 url은 필수 입력값입니다.');

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users',
// }).then((res) => {
//   res.forEach((item) => {
//     console.log(item);
//   });
// });

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST',
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({ url, method: 'DELETE' });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  });
};

// xhrPromise.get('https://jsonplaceholder.typicode.com/users');
