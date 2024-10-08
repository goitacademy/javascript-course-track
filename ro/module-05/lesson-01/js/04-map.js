/**
 * Array.prototype.map()
 * - Iterează element cu element prin array-ul original
 * - Nu modifică array-ul original
 * - Returnează un nou array de aceeași lungime
 */

const allCars = [
  { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
  { make: "Honda", model: "Accord", amount: 2, price: 22455 },
  { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
  { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
  { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
  { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
  { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
  { make: "Ford", model: "F-150", amount: 11, price: 27110 },
  { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
  { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
];

/**
 * Funcția `getModels` trebuie să returneze un array cu modelele (câmpul `model`) tuturor mașinilor.
 */

const getModels = (cars) => {};

console.table(getModels(allCars));

/**
 * Funcția `makeCarsWithDiscount` trebuie să returneze un nou array de obiecte cu valoarea
 * proprietății `price` modificată în funcție de discount-ul transmis.
 */

const makeCarsWithDiscount = (cars, discount) => {};

console.table(makeCarsWithDiscount(allCars, 0.2));
console.table(makeCarsWithDiscount(allCars, 0.4));

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
console.table(players);

/*
 * Crește numărul de ore al jucătorului după id.
 */

const playerIdToUpdate = "player-3";

const updatedPlayers = players.map((player) => {});

console.log(updatedPlayers);
