// пошук елементів
// const navItem = document.querySelector('.site-nav__item');
// console.dir(navItem);

// властивості елемента
// const imageEl = document.querySelector('.image');
// console.log(imageEl);
// console.log(imageEl.src);
// const heroTitleEl = document.querySelector('.hero__title');
// console.log(heroTitleEl);
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = 'I love you';

// додали картинку через js
// const imageEl = document.createElement('img');
// imageEl.src = 'https://placeimg.com/640/480/animals';
// console.log(imageEl);
// imageEl.width = 360;
// document.body.appendChild(imageEl);

// //створюємо і добавляєм новий пунки меню
// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navlinkEl = document.createElement('a');
// navlinkEl.classList.add('site-nav__link');
// navlinkEl.textContent = ' Hello world';
// navlinkEl.href = '/prifile';

// navItemEl.appendChild(navlinkEl);
// console.log(navItemEl);
// // console.log(navlinkEl);
// const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl);

// створюємо карточку продукта
// const product = {
//   name: 'Сервоприводи',
//   description: 'lorem fffffffffff ffffffff ffffff ffff ffff',
//   price: 2000,
//   avaible: true,
//   onSale: true,
// };

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const titleEl = document.createElement('h2');
// titleEl.textContent = product.name;
// titleEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `цена ${product.price}`;
// priceEl.classList.add('product__price');
// // console.log(productEl);
// // console.log(titleEl);
// // console.log(descrEl);
// // console.log(priceEl);

// productEl.append(titleEl, descrEl, priceEl);
// console.log(productEl);

// варінт перший як додати елемент в дом
// const list = document.querySelector('.list');
// const li = document.createElement('li');
// list.append(li);
//  варіант два як шаблонний рядок
// const li = '<li><div><p>Hello world</p></div></li>';
// list.insertAdjacentHTML('beforeend', li);

//      робота з класами   classlist
// const list = document.querySelector('.list');
// const li = document.createElement('li');
// li.classList.add('item');
// li.classList.remove('item');
// li.classList.toggle('item')
// list.append(li);

// знайти значення елемента
// const list = document.querySelector('.list');
// console.log(list.children);
// Array.from(list.children).forEach(item => console.dir((item.textContent = 'hello')));

// const input = document.querySelector('input');
// console.dir(input);

//      дата атрибути їх властивості
