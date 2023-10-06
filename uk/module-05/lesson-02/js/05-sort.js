/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * По умолчанию:
 *  - сортирует по возрастанию
 *  - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];

const sorted = numbers;
console.log("sorted ", sorted);

const letters = ["b", "B", "a", "A"];
console.log("letters", letters);

/**
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
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
 * Сортировка массива обьектов
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// По игровому времени
const sortedByBestPlayers = players;
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players;
console.table(sortedByWorstPlayers);

// По первой букве имени
const byName = players;
console.table(byName);
