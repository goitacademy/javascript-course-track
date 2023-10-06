/**
 * Метод reduce
 *
 * - Поэлементо перебирает оригинальный массив
 * - Возвращаемое значение зависит от разработчика
 */

const numbers = [5, 10, 15, 20, 25];
const total = numbers;
console.log(total);

/**
 * Считаем общую зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = salary;
console.log(totalSalary);

/**
 * Считаем общее количество часов
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed = players;
console.log(totalTimePlayed);

/**
 * Считаем общую сумму товаров корзины
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart;
console.log(totalAmount);
