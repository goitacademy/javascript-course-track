/**
 * Metoda toSorted
 *
 * - Własna kolejność sortowania liczb
 * - Własna kolejność sortowania ciągów znaków
 * - Sortowanie obiektów
 *
 * Domyślnie:
 * - sortuje w porządku rosnącym
 * - rzutuje elementy na ciąg znaków i sortuje według [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];

const sorted = numbers;
console.log("sorted ", sorted);

const letters = ["b", "B", "a", "A"];
console.log("letters", letters);

/**
 * compareFunction - funkcja porównania (callback)
 * Elementy tablicy są sortowane zgodnie z jej wartością zwracaną.
 */

console.log(
  numbers.toSorted((curEl, nextEl) => {
    return nextEl - curEl;
  })
);

const descSortedNumbers = numbers;
const ascSortedNumbers = numbers;
console.log("descSortedNumbers", descSortedNumbers);
console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Sortowanie tablicy obiektów
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// Według czasu gry
const sortedByBestPlayers = players;
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players;
console.table(sortedByWorstPlayers);

// Według pierwszej litery nazwy
const byName = players;
console.table(byName);
