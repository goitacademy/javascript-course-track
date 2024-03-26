/**
 * Zdarzenie сlick
 *
 * Klikając przycisk "Click me" spraw, by
 * czerwony kwadrat przesunął się o 50 pikseli po przekątnej.
 */

const clickMe = document.querySelector(".js-click");
const box = document.querySelector(".js-box");

clickMe.addEventListener("click", handleClick);
box.addEventListener("click", handleClick);

let step = 0;

function handleClick() {
  step += 50;
  box.style.marginTop = `${step}px`;
  box.style.marginLeft = `${step}px`;
}
