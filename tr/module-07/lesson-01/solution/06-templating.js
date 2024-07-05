/*
 * innerHTML Özelliği
 * - okuma
 * - yazma
 */
const titleEl = document.querySelector('.title');
titleEl.innerHTML = '<a href="">Bu bir bağlantıdır)</a>';
titleEl.innerHTML = '';
/*
 * insertAdjacentHTML() yöntemi kullanarak işaretleme ekleme
 */
titleEl.insertAdjacentHTML('beforeend', '<a href="" class="title__link">Bu bir bağlantı!</a>');