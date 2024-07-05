/**
 * Her öğeye olay dinleyici eklemek
 * 
 * Tıklanan kareye göre rengi alın 
 */
const container = document.querySelector('.container');
[...container.children].forEach(box => {
  box.addEventListener('click', handlerClick);
});
function handlerClick(evt) {
  const color = evt.currentTarget.dataset.color;
  console.log('color =>', color);
}
/**
 * Olayların işlenmesi
 * 
 * Tıklanan kareyi rengini al
 */
const containerEl = document.querySelector('.container');
containerEl.addEventListener('click', handlerClick);
function handlerClick(evt) {
  if (!evt.target.classList.contains('box')) {
    return;
  }
  const color = evt.target.dataset.color;
  console.log('color =>', color);
}