/**
 * Greșeli comune
 *
 * - Accesarea unei variabile înainte de a fi declarată
 * - Suprascrierea valorii pentru o variabilă declarată cu const
 * - Accesarea unei variabile cu un nume greșit
 *
 */

const username = "Mango";
console.log(user); // ReferenceError: user is not defined

console.log(age); // ReferenceError: age is not defined
let age = 20;
age = 25;
console.log(age); // 25

const price = 200;
price = 250;
