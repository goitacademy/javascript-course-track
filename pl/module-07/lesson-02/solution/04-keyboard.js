/*
 * Typy zdarzeń: keypress, keydown, keyup
 * - Ograniczenia keypress
 * - Właściwości key i code
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
 * Przetwarzanie skrótów klawiaturowych
 */

document.addEventListener("keydown", handleKeyCombo);

function handleKeyCombo(evt) {
  if (evt.ctrlKey && evt.code === "KeyC") {
    evt.preventDefault();
  }
}
