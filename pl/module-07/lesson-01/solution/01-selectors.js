/*
 * Wyszukiwanie elementu HTML za pomocą querySelector i querySelectorAll
 * - Według nazwy znacznika
 * - Według nazwy klasy
 * - Według ID
 */

const magicBtn = document.querySelector('.js-magic-btn');
console.log('magicBtn', magicBtn);

const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);

const navLinksEl = document.querySelectorAll('.site-nav__link');
console.log('navLinksEl', navLinksEl);
