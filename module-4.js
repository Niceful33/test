// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(66);
// };
// const fnB = function (number) {
//   console.log('це лог при виклику fnB', number);
// };
// fnA('qwqwqw', fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };
// // const add = function (x, y) {
// //   return x + y;
// // };
// // const sub = function (x, y) {
// //   return x - y;
// // };
// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(15, 9, function (x, y) {
//   return x - y;
// });

// функція фільтрації произвольного масива по произвольному
//
// ---------поваренок
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} cook ${dish}`);
// };
// makeDish('Mango', 'порожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлети');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} cook ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff('Mango');

// mango('котлети');
// mango('пирожок');

// -----стрілочні функціі
// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };
// // //  явний возврат
// // const addArrow = (a, b, c) => {
// //   return a + b + c;
// // };
// // abo неявний возврат
// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// ---задача Артур 35:50 урок 1
// const TRANSACTION_LIMIT = 1000;
// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSucces, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError('перевищено');
//     } else if (amount > this.balance) {
//       onError('недостатньо коштів');
//     } else {
//       this.balance -= amount;
//       onSucces('Успіх');
//     }
//   },
//   deposit(amount, onSucces, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError('перевищено лимит');
//     } else if (amount <= 0) {
//       onError('не можливо додати');
//     } else this.balance += amount;
//     onSucces(this.balance);
//   },
// };

// function handleSucces(message) {
//   console.log(`Succes!${message}`);
// }
// function handleError(message) {
//   console.log(`Error ${message}`);
// }
// account.deposit(1700, handleSucces, handleError);
// // account.withdraw(2000, handleSucces, handleError);
// // account.withdraw(600, handleSucces, handleError);

// ---------задача 3 Артур 46:50 урок 1
// function each(array, callback) {
//   const newArr = [];
//   for (const number of array) {
//     const result = callback(number);
//     newArr.push(result);
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

//  переписати на стрілочну функцію
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//     return newArr;
//   }
// }
// переписана ф-я
// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

//задача 5 артур урок 1 1:18
// const each = (...args) => {
//   console.log(args);
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };
// each(1, 2, 3, 4, 5, 6);
// each(1, 2, 3, 4, 5, 6, 343, 3);

// 5виконати рефакторинг коду використувуючи метод foreach і стрілочні функ
// function logItems(items) {
//   for (const item of items) {
//     console.log(item);
//   }
// }
// logItems(['mango', 'poly', ajax]);

// const logItems = items => {
// const result = items.forEach(item => console.log(item));
// короштий запис:
// const logItems = items => {
//   items.forEach(item => console.log(item));
// };
//   const result2 = items.forEach(function (item, idx, arr) {
//     console.log(item);
//   });
// };
// logItems(['mango', 'poly', 'ajax']);

// 6  ----- артур 1:27 урок 1
// function printContact({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(nameList[i], phoneList[i]);
//   }
// }

// const printContact = ({ names, phones }) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   nameList.forEach((name, idx) => {
//     console.log(name, phoneList[idx]);
//   });

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(nameList[i], phoneList[i]);
//   }
// };

// printContact({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '890001234,89005555, 89900003,555555555,',
// });
