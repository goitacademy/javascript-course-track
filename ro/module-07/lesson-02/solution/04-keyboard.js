/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(evt) {
  console.log(evt.code);
  if (evt.code === "Escape") {
    console.log("😂");
  } else {
    console.log("😴");
  }
}

/**
 * Обробка комбінацій клавіш
 */

document.addEventListener("keydown", handleKeyCombo);

function handleKeyCombo(evt) {
  if (evt.ctrlKey && evt.code === "KeyC") {
    evt.preventDefault();
  }
}
