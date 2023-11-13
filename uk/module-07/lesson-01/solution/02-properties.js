/*
 * Свойства елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
console.log('imageEl', imageEl);
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imageEl.alt = 'Новий котик';

const heroTitleEl = document.querySelector('.hero__title');
console.log('heroTitleEl', heroTitleEl);
heroTitleEl.textContent = 'Це новий текст!';

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

console.log(imageEl.getAttribute('src'));
console.log(imageEl.src);
console.log(imageEl.hasAttribute('src'));

/*
 * Data-атрибути
 */
const actions = document.querySelectorAll('.actions button');
console.log(actions);
console.log(actions[2].dataset.action);
