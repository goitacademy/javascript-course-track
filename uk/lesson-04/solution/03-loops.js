/**
 * Цикли
 *
 * - Цикл for
 * - Отсчет от 0 до N
 * - Обратный отсчет от N до 0
 * - Уверличение/уменьшение счетчика на 2+
 * - Інкремент і декремент
 */

console.log("Before");

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

console.log("After");

/**
 * -------------------------------
 */

console.log("Before");

for (let i = 10; i >= 0; i -= 2) {
  console.log(i);
}

console.log("After");

/**
 * -------------------------------
 */

let a = 10;
const b = ++a;

console.log(a);
console.log(b);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
