/**
 * Funkcja wywołania zwrotnego (callback)
 *
 * - Funkcja jako wartość
 * - Funkcje wywołania zwrotnego
 * - Wywołania zwrotne inline
 */

function fnA(message, callback) {
  console.log(message);

  console.log(callback);
  callback(100);
}

function fnB(number) {
  console.log("Log during fnB execution ", number);
}

fnA("A message", fnB);

/**
 * Funkcja calc(a, b, callback)
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

/**
 * Napisz funkcję each(array, callback), która oczekuje tablicy jako pierwszego parametru
 * i funkcji, która jest stosowana do każdego elementu tablicy jako drugiego parametru. Funkcja 
 * each powinna zwrócić nową tablicę z wynikami wywołania zwrotnego.
 */

function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
