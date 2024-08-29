/**
 * Funcții arrow
 * - Declarare
 * - Returnare explicită și implicită
 * - Pseudo-array `arguments` (...args)
 * - Funcții arrow inline
 */

function add(a, b, c) {
  return a + b + c;
}

// const addArrow =

console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

/**
 * ---------------------------
 */
function fnA() {
  return {
    a: 5,
  };
}

console.log(fnA());

// const arrowFnA =

// console.log(arrowFnA());

/**
 * Funcția calc(a, b, callback)
 */

function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

calc(2, 3, function (x, y) {
  return x + y;
});

calc(10, 8, function (x, y) {
  return x - y;
});
