/*
 * Tworzymy i dodajemy kolekcję
 */
const options = [
  { label: 'czerwony', color: '#F44336' },
  { label: 'zielony', color: '#4CAF50' },
  { label: 'niebieski', color: '#2196F3' },
  { label: 'szary', color: '#607D8B' },
  { label: 'różowy', color: '#E91E63' },
  { label: 'indygo', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

/*
 * Piszemy funkcję do tworzenia znaczników selektora kolorów
 */
