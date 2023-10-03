/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Переопределение
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
console.table(friends);
console.log([0]);
console.log([1]);
console.log([2]);
console.log([3]);

friends[1] = "Jacob";
friends[3] = "Adrian";
console.table(friends);

console.log(friends.length);

const lastIndex = friends.length - 1;
console.log(lastIndex);
