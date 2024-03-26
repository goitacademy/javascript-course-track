const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

form.addEventListener("submit", onFormSubmit);
textarea.addEventListener("input", onTextareaInput);

populateTextarea();

/*
 * - Anulujemy standardowe zachowanie
 * - Usuwamy wiadomości z hurtowni
 * - Czyścimy formularz
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log("Wysyłamy formularz");
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Pobieramy wartość pola
 * - Zapisujemy ją w hurtowni
 */
function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

/*
 * - Pobieramy wartość z hurtowni
 * - Aktualizujemy DOM, jeśli coś tam było.
 */
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    textarea.value = savedMessage;
  }
}
