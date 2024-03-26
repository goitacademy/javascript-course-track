/*
 * Właściwości elementu  (hero)
 * - Obraz
 * - Tekst i textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
console.log('imageEl', imageEl);
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imageEl.alt = 'Nowy kociak';

const heroTitleEl = document.querySelector('.hero__title');
console.log('heroTitleEl', heroTitleEl);
heroTitleEl.textContent = 'To jest nowy tekst!';

/*
 * Atrybuty
 * - get(nazwa-atrybutu)
 * - set(nazwa-atrybutu)
 * - remove(nazwa-atrybutu)
 * - has(nazwa-atrybutu)
 */

console.log(imageEl.getAttribute('src'));
console.log(imageEl.src);
console.log(imageEl.hasAttribute('src'));

/*
 * Atrybuty danych
 */
const actions = document.querySelectorAll('.actions button');
console.log(actions);
console.log(actions[2].dataset.action);
