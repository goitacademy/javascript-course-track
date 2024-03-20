/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current');
