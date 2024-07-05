/*
 * Kahramanın özellikleri (hero)
 * - Görüntü
 * - Metin ve textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */
const imageEl = document.querySelector('.hero__image');
console.log('imageEl', imageEl);
imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imageEl.alt = 'Yeni kedi';
const heroTitleEl = document.querySelector('.hero__title');
console.log('heroTitleEl', heroTitleEl);
heroTitleEl.textContent = 'Bu yeni bir metin!';
/*
 * özellikler
 * - get (özellik-adı)
 * - set (özellik-adı)
 * - remove (özellik-adı)
 * - has (özellik-adı)
 */
console.log(imageEl.getAttribute('src'));
console.log(imageEl.src);
console.log(imageEl.hasAttribute('src'));
/*
 * Data-öznitelikleri
 */
const actions = document.querySelectorAll('.actions button');
console.log(actions);
console.log(actions[2].dataset.action);