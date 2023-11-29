/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

localStorage.setItem(LS_KEY, JSON.stringify(names));

/**
 * Читання
 */

const value = localStorage.getItem(LS_KEY);
console.log(value);
console.log(JSON.parse(value));

/**
 * Видалення
 */

localStorage.removeItem(LS_KEY);

/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

localStorage.setItem("my function", JSON.stringify(add));
console.log(localStorage.getItem("my function"));

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};

localStorage.setItem("my function", JSON.stringify(calculator));
console.log(localStorage.getItem("my function"));
