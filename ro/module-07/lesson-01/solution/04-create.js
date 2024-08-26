/*
 * Створення та додавання елементів
 */

/*
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Це заголовок сторінки :)';
console.log(titleEl);
document.body.append(titleEl);

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;
console.log('imageEl', imageEl);
document.body.append(imageEl);

const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imageEl);

/*
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Особистий кабінет';
navLinkEl.href = '/profile';

navItemEl.append(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');

navEl.append(navItemEl);
navEl.before(navItemEl, navEl.firstElementChild);
