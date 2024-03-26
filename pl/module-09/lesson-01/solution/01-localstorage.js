/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

/**
 * Zapisywanie
 * Dlaczego warto używać metody JSON.stringify
 */

localStorage.setItem(LS_KEY, JSON.stringify(names));

/**
 * Odczyt
 * Dlaczego warto używać metody JSON.parse
 */

const value = localStorage.getItem(LS_KEY);
console.log(value);
console.log(JSON.parse(value));

/**
 * Usuwanie
 */

localStorage.removeItem(LS_KEY);

/**
 * LocalStorage nie może przechowywać funkcji
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
