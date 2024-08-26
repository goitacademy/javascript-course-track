/**
 * Funcții callback
 *
 * - Funcția ca valoare
 * - Funcții callback
 * - Inline callback 
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
 * Функція calc(a, b, callback)
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
 * Scrie o funcție `each(array, callback)` care primește un array ca prim parametru,
 * și o funcție ca al doilea parametru, care se aplică fiecărui element din array.
 * Funcția `each` trebuie să returneze un nou array, ale cărui elemente sunt
 * rezultatele apelării callback-ului.
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
