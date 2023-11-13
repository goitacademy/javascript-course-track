/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

const magicBtn = document.querySelector('.js-magic-btn');
console.log('magicBtn', magicBtn);

const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);

const navLinksEl = document.querySelectorAll('.site-nav__link');
console.log('navLinksEl', navLinksEl);

/*
 * Свойства «навігації» по DOM-вузлах
 *
 */

// const firstNavItemEl = navEl.querySelector('.site-nav__item');
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl);
console.log(navEl.children);
console.log(navEl.lastElementChild);
