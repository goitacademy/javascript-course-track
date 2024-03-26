/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

/**
 * Zapisywanie
 * Dlaczego warto używać metody JSON.stringify
 */

/**
 * Odczyt
 * Dlaczego warto używać metody JSON.parse
 */

/**
 * Usuwanie
 */

/**
 * LocalStorage nie może przechowywać funkcji
 */

function add(a, b) {
  return a + b;
}

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};
