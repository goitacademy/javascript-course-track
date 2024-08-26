/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector('.title');
titleEl.innerHTML = '<a href="">Це посилання)</a>';
titleEl.innerHTML = '';

/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

titleEl.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="title__link">Це посилання!</a>',
);
