/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
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
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
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
