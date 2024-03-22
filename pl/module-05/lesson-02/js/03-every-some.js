const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

/**
 * Metoda every
 *
 * - Iteruje po oryginalnej tablicy element po elemencie
 * - Zwraca wartość true, jeśli wszystkie elementy tablicy spełniają warunek
 */
const isAllOnline = players;
// console.log('isAllOnline: ', isAllOnline);

/**
 * Metoda some
 *
 * - Iteruje po oryginalnej tablicy element po elemencie
 * - Zwraca wartość true, jeśli co najmniej jeden element tablicy spełnia warunek
 */
const isAnyOnline = players;
console.log("isAnyOnline: ", isAnyOnline);

const anyHardcorePlayers = players;
console.log("anyHardcorePlayers: ", anyHardcorePlayers);
