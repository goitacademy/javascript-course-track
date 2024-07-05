/*
 * - submit olay
 * - Tarayıcı varsayılan eylemleri
 * - elements özelliği
 *
 * Formu işle ve kullanıcının geri bildirimini bir nesne olarak topla
 */
const form = document.querySelector('.js-form');
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const elements = evt.currentTarget.elements;
  const info = {
    email: elements.email.value,
    password: elements.password.value,
    comment: elements.comment.value
  };
  console.log(info);
}