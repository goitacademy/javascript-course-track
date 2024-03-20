/**
 * Typowe błędy
 *
 * - Odwoływanie się do zmiennej przed jej zadeklarowaniem
 * - Nadpisanie wartości dla zmiennej zadeklarowanej za pomocą const
 * - Odwoływanie się do zmiennej przy użyciu nieprawidłowej nazwy
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
