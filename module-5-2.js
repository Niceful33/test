// const objC = {
//   z: 5,
// };
// console.log(objC);
// const objB = Object.create(objC);
// objB.y = 2;
// console.log('objB', objB);

// const objA = Object.create(objB);
// objA.x = 1;
// console.log('objA', objA);

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   this.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };
// };
// const myCar2 = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar2);

// const myCar3 = new Car({
//   brand: 'bmw',
//   model: 'x6',
//   price: 39000,
// });
// console.log(myCar3);

// класи
// class Car1 {}
// console.dir(Car1);
// const carInstance = new Car1();
// console.log(carInstance);
// -------artem prototype
// const obj = {
//   a: 4,
//   b: 5,
//   add() {
//     console.log(this.a + this.b);
//   },
//   sum(value) {
//     console.log(this.a + this.b + value);
//   },
// };
// obj.add();

// const obj2 = Object.create(obj);
// obj2.a = 10;
// // console.log(obj2);
// // obj2.add();
// // obj2.sum(12);
// const obj3 = Object.create(obj2);
// console.log(obj3);
// console.log(obj3.a);
// obj.add = function () {
//   console.log(this.a * this.b);
// };
// obj3.add();

// не рекомендується перебиратичерез цикл for in
// const obj = {
//   a: 1,
//   b: 2,
// };
// const obj2 = Object.create(obj);
// obj2.c = 3;

// for (const key in obj2) {
//   if (obj2.hasOwnProperty(key)) console.log(key);
// }

// ----klasu
// class User {
//   #userPassword;
//   constructor(name, password = 'qwerty') {
//     this.userName = name;
//     this.#userPassword = password;
//   }
//   say() {
//     console.log(`Hello my name ${this.userName}`);
//   }
//   get password() {
//     console.log(this.#userPassword);
//   }
//   set password(newPassword) {
//     if (newPassword.length === 7) {
//       this.#userPassword = newPassword;
//     } else {
//       console.log('sorry');
//     }
//   }
// }
// const item = new User('user', '12345');
// const item2 = new User('olga');
// const item3 = new User('kate');
// item.password;
// item.password = 'abcdfff';
// // console.log((item.userPassword = '1'));
// console.log(item);
// console.log(item2);
// console.log(item3);

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(getEmails());

// const scores = [1, 2, 3, 4, 7];
// const deletedScores = scores.splice(0, 3);
// console.log(scores);

// const listWithId = document.querySelector('#menu');
