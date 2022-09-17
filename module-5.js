'use strict';
// const petya = {
//   username: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };
// petya.showThis();
// petya.showName();

// function showThis() {
//   console.log('this in showThis: ', this);
// }
// showThis();
// function foo() {
//   console.log(this);
// }

// foo();
// const foo = function () {
//   console.log('foo->this', this);
// };
// foo();

// урок артур 31:43
//  declaration
// function foo() {
//   console.log(this);
// }
// foo();
// // expretion
// const boo = function () {
//   console.log(this);
// };
// boo();

// const user = {
//   name: 'Artem',
//   age: 27,
//   say() {
//     console.log(this);
//   },
// };
// user.say();

// --------call--
// const user = {
//   name: 'Artem',
//   age: 44,
//   say(lastName, city) {
//     console.log(`hello ${this.name},${lastName} from ${city}`);
//   },
// };
// const admin = {
//   name: 'Adnim',
//   age: 35,
// };

// user.say.call(admin, 'User', 'Lviv');
// user.say.call(admin, 'Admin', 'Odesa');

// задача1  напишіть методд калкулейттотадпрайс,який приймає назву каменю та розраховує та повертає загальну вартітсть каменів з таким імям,ціною та кілкістю із властивості стонес
// const chopShop = {
//   stones: [
//     {
//       name: 'Emerald',
//       price: 1300,
//       quantity: 4,
//     },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     {
//       name: 'Saphire',
//       price: 1400,
//       quantity: 7,
//     },
//     {
//       name: 'Ruby',
//       price: 800,
//       quantity: 2,
//     },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(({ name }) => {
//       return stoneName === name;
//     });
//     console.log(stone);
//     const responce = stone.price * stone.quantity;
//     return responce;
//   },
// };
// console.log(chopShop.calcTotalPrice('Emerald'));

// ----задача 2
// створіть обєкт calculator із трьома методами:
//  read(a,b)- приймає два значення та зберігає їх як властивості обєкта. 2. add() поветрає суму збережених значень. 3. mult() - перемножуэ збережены значення та повертаэ резульатт.
// const calculator={};
const calculator = {
  a: null,
  b: null,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

// calculator.read(5, 10);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

const obj = {};
const calc1 = calculator.read.bind(obj);
const add = calculator.add.bind(obj);
const mult = calculator.mult.bind(obj);
console.log(calc1(10, 15));
console.log(add());
console.log(mult());
console.log(obj);
console.log(calc1(6, 10));
console.log(add());
console.log(mult());
console.log(obj);
console.log(obj);
