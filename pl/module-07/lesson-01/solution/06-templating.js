/*
 * Właściwość innerHTML
 * - odczyt
 * - zapis
 */

const titleEl = document.querySelector('.title');
titleEl.innerHTML = '<a href="">To jest link)</a>';
titleEl.innerHTML = '';

/*
 * Wstawianie znaczników za pomocą insertAdjacentHTML()
 */

titleEl.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="title__link">To jest link!</a>',
);
