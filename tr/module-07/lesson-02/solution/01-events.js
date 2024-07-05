/**
 * Click olayı
 *
 * "Click me" düğmesine tıkladığınızda
 * kırmızı kareyi 50px çapraz hareket ettirmek için
 */
const clickMe = document.querySelector('.js-click');
const box = document.querySelector('.js-box');
clickMe.addEventListener('click', handleClick);
box.addEventListener('click', handleClick);
let step = 0;
function handleClick() {
  step += 50;
  box.style.marginTop = `${ step }px`;
  box.style.marginLeft = `${ step }px`;
}