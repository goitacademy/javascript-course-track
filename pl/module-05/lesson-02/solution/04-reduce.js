/**
 * Metoda reduce
 *
 * - Iteruje po oryginalnej tablicy element po elemencie
 * - Zwracana wartość zależy od dewelopera
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

/**
 * Obliczamy całkowite wynagrodzenie
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);
console.log(totalSalary);

/**
 * Obliczamy całkowitą liczbę godzin
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);

console.log(totalTimePlayed);

/**
 * Obliczamy całkowitą kwotę artykułów w koszyku
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
console.log(totalAmount);
