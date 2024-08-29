/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
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
 * Пишемо функцію для створення розмітки колорпікера
 */
// const makePickerOptions = options => {};

// const elements = makePickerOptions(options);
// colorPickerContainerEl.append(...elements);
