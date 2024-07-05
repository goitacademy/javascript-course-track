/*
 * querySelector ve querySelectorAll kullanarak HTML öğesini arama
 * - Etiket adına göre
 * - Sınıf adına göre
 * - Kimlik (ID) ile
 */
const magicBtn = document.querySelector('.js-magic-btn');
console.log('magicBtn', magicBtn);
const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);
const navLinksEl = document.querySelectorAll('.site-nav__link');
console.log('navLinksEl', navLinksEl);
/*
 * DOM düğümlerinde "gezinme" özellikleri
 *
 */
// const firstNavItemEl = navEl.querySelector('.site-nav__item');
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl);
console.log(navEl.children);
console.log(navEl.lastElementChild);