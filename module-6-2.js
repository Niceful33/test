// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listetner');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// addListenerBtn.addEventListener('click', () => {
//   console.log('вішаю слушеткля на ціль кнопку');

//   // targetBtn.addEventListener('click', () => {
//   //   console.log('клик по целевой кнопке');
//   // });
//   targetBtn.addEventListener('click', onTragetbtnClick);
// });

// removeListenerBtn.addEventListener('click', () => {
//   console.log('снимаю слушателя с целеой кнопки');

//   // targetBtn.removeEventListener('click', () => {
//   //   console.log('клик по целевой кнопке');
//   // });
//   targetBtn.removeEventListener('click', onTragetbtnClick);
// });

// function onTragetbtnClick() {
//   console.log('клик по целевой кнопке');
// }

// function logMessage() {
//   console.log('клик по целевой кнопке');
// }

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// input.addEventListener('focus', onInputFocus);
// input.addEventListener('blur', onIputBlur);
// input.addEventListener('change', onInputChange);
// input.addEventListener('input', onInputChange);

// input.addEventListener('input', onInputChange);
// license.addEventListener('change', onLicenseChange);
// function onInputFocus() {
//   console.log('инпут получил фокус-соботия focus');
// }

// function onIputBlur() {
//   console.log('инпут потерял фокус - собития blur');
// }

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   nameLabel.textContent = event.currentTarget.value;
// }

// function onLicenseChange(event) {
//   console.log(event.currentTarget.checked);

//   btn.disabled = !event.currentTarget.checked;
// }

// const output = document.querySelector('.js-output');
// const clearBtn = document.querySelector('.js-clear');

// window.addEventListener('keydown', onKeypress);

// function onKeypress(event) {
//   // console.log(event);
//   console.log('event:key', event.key);
//   //  console.log('event:code', event.code);
// }

// function onClearOutPut() {}

// ARtem
// const button = document.querySelector('.hello');
// const item = document.querySelector('.item');
// let value = 1;
// button.addEventListener('click', onClick);
// // console.log(item);

// function onClick(event) {
//   // console.log(event);
//   value += 1;
//   console.dir(item.style.fontSize);
//   item.style.fontSize = value * 10 + 'px';
// }

// 22222
// const item = document.querySelector('.item');
// item.addEventListener('click', onClick);
// function onClick(evt) {
//   console.dir(evt.currentTarget.textContent);
// }

// 33333
// const input = document.querySelector('.input');
// input.addEventListener('input', handlerInput);

// function handlerInput(evt) {
//   console.dir(evt.currentTarget.value);
// }

// 44444444
// const form = document.querySelector('.form');
// form.addEventListener('submit', onSubmit);
// function onSubmit(evt) {
//   evt.preventDefault();
//   // console.log(evt.currentTarget.elements.email.value);
//   // console.log(evt.currentTarget.elements.password.value);
//   const { email, password } = evt.currentTarget.elements;
//   console.log(email.value);
//   console.log(password.value);
// }

// 555555  eventlistener
document.addEventListener('keyup', onBoard);

const add = document.addEventListener('click', onClick);
// document.body.insertAdjacentElement('beforeend', '<div class="box"></div>');

function onBoard(evt) {
  if (evt.code === 'Escape') {
    const box = document.querySelector('.box');
    box.remove();
  }
}

function onClick() {
  document.body.insertAdjacentHTML('beforeend', '<div class="box"></div>');
}
