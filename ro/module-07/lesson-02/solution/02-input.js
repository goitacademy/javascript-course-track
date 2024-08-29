/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userName = document.querySelector(".js-user-name");

userName.addEventListener("input", handleInput);

function handleInput(evt) {
  console.log(evt.currentTarget.value);
}

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з вітальним повідомленням
 */

userName.addEventListener("blur", handlerGreeting);

function handlerGreeting(evt) {
  const name = evt.currentTarget.value;

  alert(`${name}, I'm very glad to see you`);
}
