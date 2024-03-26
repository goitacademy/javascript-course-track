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

const elements = options.map(option => {
  const buttonEl = document.createElement('button');
  buttonEl.type = 'button';
  buttonEl.classList.add('color-picker__option');
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  return buttonEl;
});

console.log(elements);

colorPickerContainerEl.append(...elements);

/*
 * Piszemy funkcję do tworzenia znaczników selektora kolorów
 */
// const makePickerOptions = options => {};

// const elements = makePickerOptions(options);
// colorPickerContainerEl.append(...elements);
