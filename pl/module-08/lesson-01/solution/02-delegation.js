/**
 * Dodawanie nasłuchiwacza zdarzeń do każdego elementu
 *
 * Pobierz kolor kwadratu, który został kliknięty
 */

const container = document.querySelector(".container");

[...container.children].forEach((box) => {
  box.addEventListener("click", handlerClick);
});

function handlerClick(evt) {
  const color = evt.currentTarget.dataset.color;
  console.log("color =>", color);
}

/**
 * Delegowanie zdarzeń
 *
 * Pobierz kolor kwadratu, który został kliknięty
 */

const containerEl = document.querySelector(".container");
containerEl.addEventListener("click", handlerClick);

function handlerClick(evt) {
  if (!evt.target.classList.contains("box")) {
    return;
  }

  const color = evt.target.dataset.color;
  console.log("color =>", color);
}
