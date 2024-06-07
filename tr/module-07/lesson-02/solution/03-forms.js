/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та зібери відгук користувача в об'єкт
 */

const form = document.querySelector(".js-form");
form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const elements = evt.currentTarget.elements;

  const info = {
    email: elements.email.value,
    password: elements.password.value,
    comment: elements.comment.value,
  };

  console.log(info);
}
