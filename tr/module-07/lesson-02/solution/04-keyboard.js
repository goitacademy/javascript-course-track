/*
 * Olay türleri: keypress, keydown, keyup
 * - Kısıtlamalar keypress
 * - key ve code özellikleri
 */
document.addEventListener('keydown', handleKeyPress);
function handleKeyPress(evt) {
  console.log(evt.code);
  if (evt.code === 'Escape') {
    console.log('😂');
  } else {
    console.log('😴');
  }
}
/**
 * Tuş kombinasyonlarının işlenmesi
 */
document.addEventListener('keydown', handleKeyCombo);
function handleKeyCombo(evt) {
  if (evt.ctrlKey && evt.code === 'KeyC') {
    evt.preventDefault();
  }
}