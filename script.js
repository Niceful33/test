// Change code below this line
// const productName = 'Droid';
// console.log(productName);
// ('Droid');
// const pricePerItem = 200;
// console.log(pricePerItem);
// 2000;

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);
// let age = 20;
// age = 25;
// console.log(age);

//
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem;
// console.log(pricePerItem * orderedQuantity);
// const productName = 'Droid';
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);
// щаблонні рядки
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid + orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

//  ,,виклик функції
// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// параметри та аргументи
// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.
// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;
//   // Change code above this line
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line

//   return message;
// }

// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       'Access denied, wrong password!';
//   }
// }

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   switch (country) {
//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;
//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;
//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;
//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;
//     default:
//       'Sorry, there is no delivery to your country';
//   }

//   // Change code above this line
//   return message;
// }

// 1) почситать общую суму покупок в корзине
// const cart = [54, 28, 105, 70, 92, 17, 120];
//2сделать переменнцю тотал до цикла
// let total = 0;
// //1. перебрать масив
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//3 каждий елемент приплюсовать к тотал
//   total = total + cart[i];
// }
// console.log('Total:', total);

//2)  написати скрипт який підраховує всю суму парних чисел
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// 1 переменная тотал
// 2 перебрать масив
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);

//   // 3 на каждой итерации проверить елемент на точность
//   if (numbers[i] % 2 === 0) {
//     console.log('Парне!');
//     // 4 еслм четний плюсуем к тотал
//     total += numbers[i];
//   }
// }
// console.log('Total', total);
//abo
// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 === 0) {
//     console.log('парне!');
//     total += number;
//   }
// }
// console.log('Total', total);

//напиши скрипт рошуку логынa
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[3]);

// const clients = ['Mango', 'Poly', 'Ajax'];

// // Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); //

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const totalPrice = message.split(' ').length * pricePerWord;
//   return totalPrice;
// }
