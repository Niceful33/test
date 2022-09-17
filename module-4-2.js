// стрілочні ф-ї
// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);
//     const inner = function () {
//       console.log('this in inner: ', this);
//     };
//     inner();
//   },
// };
// user.showName();
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Akax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// виведем з масиву тільки імена
// const playerNames = players.map(player => {
//   console.log(player);
//   return player.name;
// });
// console.log('pleyeNames', playerNames);

// const playerIds = players.map(player => player.id);
// console.log('pleyerIds', playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

// ------збільшуєемо к-сть поінтов кожного ігрока на 10%:
// const updatedPlayers = players.map(player => {
//   // console.log(player);
//   return { ...player, points: player.points * 1.1 };
// });
// console.log(updatedPlayers);
// -------збільшуємо к-сть годин іграків по іd
// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   console.log(player.id);
//   if (playerIdToUpdate === player.id) {
//     console.log('нашли кого треба обновити');

//     return { ...player, timePlayed: player.timePlayed + 100 };
//   }
//   // return 'це буде старий обєкт';
//   return player;
// });
// console.log(updatedPlayers);

// --------фільтри -----
// получаем масив хто онлайн
// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);
// -----получем неонлайн
// const offlineplayers = players.filter(player => !player.online);
// console.log(offlineplayers);

// ----получаем список хардкооррних іграків з часом більше 250.
// const hardcorPlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcorPlayers);

// -------find    шукаєм ігрока по ід
// const playerFindToId = 'player-3';
// const playerFindWithId = players.find(player => player.id === playerFindToId);
// console.log(playerFindWithId);
// const playerNameToFind = 'Poly';
// const playerwithName = players.find(player => player.name === playerNameToFind);
// console.log(playerwithName);

// ----every
// const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// -----some
// const isAnyOnline = players.some(player => player.online);
// console.log(isAnyOnline);

// ----reduse

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };
// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);
// console.log(totalSalary);

// -----порахувати загальну кількість годин
// const totalTimeplayed = players.reduce((totalTime, player) => {
//   return totalTime + player.timePlayed;
// }, 0);
// console.log(totalTimeplayed);
// ----корзина товару порахувати
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];
// const totalPrice = cart.reduce((total, item) => {
//   return total + item.price * item.quantity;
// }, 0);
// console.log(totalPrice);

// ------sort
// const numbers = [1, 9, 6, 3];
// numbers.sort();
// console.log(numbers);

// ------chaning
// const numbers = [1, 5, 2, 4, 3];
// // 1. відфільтрувати значення більші за 2
// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);
// // 2. кожне значення збільштити у на 3
// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);
// // 3. сотртируємо
// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

// ----сортируєм тих хто онлайн по рангу.
// спочтак фільтруєм хто хто онлайн, потім сортируємо по зростанню
// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Akax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'kiwi', isOnline: true, rank: 400 },
// ];
// const onlineSorted = players.filter(player => player.isOnline).sort((a, b) => a.rank - b.rank);
// console.table(onlineSorted);

// --------- autocheck1
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line
// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);
// --------- autocheck1
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// --------- autocheck1
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line
// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(makePizza);
// });

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres;

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// // Change code below this line

// const ascendingReleaseDates = releaseDates.sort();
// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = authors.sort();
// console.log(alphabeticalAuthors);
