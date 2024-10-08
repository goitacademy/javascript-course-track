/**
 * Obiecte
 *
 * - Tip de date prin referință
 * - Array-urile și funcțiile sunt obiecte
 */

console.log([1, 2, 3] === [1, 2, 3]);
console.log({ a: 1 } === { a: 1 });

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a);

a.hello = 100;
b.hello = 150;

console.log(a);
console.log(b);

/**
 * --------------------------
 */

const arr = [1, 2, 3];

arr.hello = ":)";

console.log(arr);

function foo() {
  console.log("hello");
}

foo.newProp = ";)";

console.dir(foo);
console.log(foo.newProp);
