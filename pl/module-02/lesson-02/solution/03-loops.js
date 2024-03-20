/**
 * Pętle
 *
* - Pętla for
 * - Liczenie od 0 do N
 * - Odliczanie od N do 0
 * - Zwiększenie/zmniejszenie licznika o 2+.
 * - Inkrementacja i dekrementacja
 * - Pętle while і do...while
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
