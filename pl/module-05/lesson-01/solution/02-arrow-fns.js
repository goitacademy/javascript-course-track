/**
 * Funkcje strzałkowe
 * - Deklaracja
 * - Jawne i niejawne zwracanie
 * - Pseudotablica arguments (...args)
 * - Funkcje strzałkowe inline
 */

function add(a, b, c) {
  return a + b + c;
}

const addArrow = (a, b, c) => {
  return a + b + c;
};

console.log(add(5, 10, 15));
console.log(addArrow(5, 10, 15));

/**
 * ---------------------------
 */
function fnA() {
  return {
    a: 5,
  };
}

console.log(fnA());

const arrowFnA = () => ({
  arrowA: 5,
});

console.log(arrowFnA());

/**
 * Funkcja calc(a, b, callback)
 */

const calc = (a, b, callback) => {
  const result = callback(a, b);
  console.log(result);
};

calc(2, 3, (x, y) => {
  return x + y;
});

calc(10, 8, (x, y) => {
  return x - y;
});
