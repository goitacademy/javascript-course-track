/**
 * Referans ve değer ile aktarma
 *
 * İlkel ve karmaşık türler
 * Referans eşitliği
 */

const a = [1, 2, 3];
const b = a;

console.log("a", a);
console.log("b", b);

a[0] = 500;

console.log("a", a);
console.log("b", b);

console.log(a === b);

console.log([] === []);
console.log([1, 2, 3] === [1, 2, 3]);
