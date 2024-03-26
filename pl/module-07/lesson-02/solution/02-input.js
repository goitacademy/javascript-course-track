/**
 * - Zdarzenie input
 * - Zdarzenie blur
 *
 * Wyświetlaj w konsoli wszystko, co użytkownik wprowadzi w input
 */

const userName = document.querySelector(".js-user-name");

userName.addEventListener("input", handleInput);

function handleInput(evt) {
  console.log(evt.currentTarget.value);
}

/**
 * Użytkownik wprowadza swoje imię w input, a po utracie
 * fokusu otrzymuje powiadomienie z komunikatem powitalnym
 */

userName.addEventListener("blur", handlerGreeting);

function handlerGreeting(evt) {
  const name = evt.currentTarget.value;

  alert(`${name}, I'm very glad to see you`);
}
