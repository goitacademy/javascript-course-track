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

const sorted = numbers.toSorted();
console.log("sorted ", sorted);

const letters = ["b", "B", "a", "A"];
console.log("letters", letters.toSorted());

/**
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 */

console.log(
  numbers.toSorted((curEl, nextEl) => {
    return nextEl - curEl;
  })
);

const descSortedNumbers = numbers.toSorted((a, b) => b - a);
const ascSortedNumbers = numbers.toSorted((a, b) => a - b);
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
const sortedByBestPlayers = players.toSorted(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortedByWorstPlayers);

const byName = players.toSorted((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});

console.table(byName);
