/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우
const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    this.stomach.push(food);
  }, // setter
  get eat() {
    return this.stomach;
  }, // getter
};

const tiger = {
  pattern: '호랑이무늬',
  prey: '',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const fox = {
  prey: '',
  __proto__: animal,
};

// tiger.__proto__ = animal;
// fox.__proto__ = animal;

// 생성자 함수
// 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자 함수다.

// function Button(name) {
//   this.name = name;
//   // console.log(this);
// }

// const a = Button('버튼'); // 일반 함수
// const b = new Button('버튼'); // 생성자 함수

// function User(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }

// const person = new User('선범', 32, 'tiger@naver.com');

//
//
//

// function Animal() {
//   this.stomach = [];
//   this.legs = 4;
//   this.tail = true;
//   this.eat = function (food) {
//     this.stomach.push(food);
//   };
//   this.printEat = function () {
//     return this.stomach;
//   };
// }

// const tiger = new Animal();
// const cat = new Animal(); // 참조되지 않음

// tiger.pattern = '호랑이 무늬';

// tiger.hunt = function (target) {
//   this.prey = target;
//   console.log(`${target}에게 슬금슬금 접근합니다.`);
// };

// 클래스를 배울 때 다시 할 예정

class User {
  legs = 2;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

const person = new User('선범');
