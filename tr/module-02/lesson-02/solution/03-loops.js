/**
 * Döngüler
 *
 * For döngüsü
 * - 0'dan N'ye kadar sayın
 * - N'den 0'a geri sayım
 * - Sayacı 2+ artırır/azaltır
 * - Artırma ve azaltma
 * - While ve do...while döngüleri
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

/**
 * -------------------------------
 */

console.log("Before while loop");

let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter += 1;
}

console.log("After while loop");
