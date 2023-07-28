import { isString } from './typeOf.js';

const { localStorage: storage } = globalThis;

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({
        message: 'setStorage함수의 첫번째 인자 key는 문자 타입입니다.',
      });
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({
        message: 'getStorage함수의 인자는 문자 타입입니다.',
      });
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      !key ? storage.clear() : storage.removeItem(key);
      resolve();
    } else {
      reject({
        message: 'deleteStorage함수의 인자는 문자 타입입니다.',
      });
    }
  });
}
