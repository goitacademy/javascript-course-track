const STORAGE_KEY = 'feedback-msg';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);
populateTextarea();
/*
 * - Standart davranışı iptal ediyoruz
 * - Depodan mesajı siliyoruz
 * - Formu temizliyoruz
 */
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('Відправляємо форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
/*
 * - Alanın değerini alıyoruz
 * - Değeri depoda saklıyoruz
 */
function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}
/*
 * - Depodan değeri alıyoruz
 * - Eğer bir değer varsa, DOM'u güncelliyoruz
 */
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    textarea.value = savedMessage;
  }
}