/**
 * Tipik hatalar
 *
 * - Bildirilmeden önce bir değişkene erişme
 * - const ile tanımlanan bir değişken için bir değeri geçersiz kılmak
 * - Yanlış bir değişken adına başvurmak
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
