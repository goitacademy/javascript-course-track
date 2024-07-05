/**
 * toSorted Metodu
 *
 * - Kendi sayı sıralama düzeni
 * - Kendi metin sıralama düzeni
 * - Nesnelerin sıralanması
 *
 * Varsayılan olarak:
 * - Artan sırayla sıralar
 * - Ögeleri dizeye dönüştürür ve [Unicode](https://unicode-table.com/en/)'e göre sıralar
 */
const numbers = [
  1,
  9,
  6,
  2,
  3
];
const sorted = numbers;
console.log('sorted ', sorted);
const letters = [
  'b',
  'B',
  'a',
  'A'
];
console.log('letters', letters);
/**
 * compareFunction - karşılaştırma işlevi (callback)
 * Dizinin öğeleri, döndürülen değere göre sıralanır
 */
console.log(numbers.toSorted((curEl, nextEl) => {
  return nextEl - curEl;
}));
const descSortedNumbers = numbers;
const ascSortedNumbers = numbers;
console.log('descSortedNumbers', descSortedNumbers);
console.log('ascSortedNumbers', ascSortedNumbers);
/**
 * Nesne dizisinin sıralanması
 */
const players = [
  {
    id: 'player-1',
    name: 'Mango',
    timePlayed: 310,
    online: false
  },
  {
    id: 'player-2',
    name: 'Poly',
    timePlayed: 470,
    online: true
  },
  {
    id: 'player-3',
    name: 'Aiwi',
    timePlayed: 230,
    online: true
  },
  {
    id: 'player-4',
    name: 'Ajax',
    timePlayed: 150,
    online: false
  },
  {
    id: 'player-5',
    name: 'Chelsey',
    timePlayed: 80,
    online: true
  }
];
// Oyun süresine göre
const sortedByBestPlayers = players;
console.table(sortedByBestPlayers);
const sortedByWorstPlayers = players;
console.table(sortedByWorstPlayers);
// İsme göre ilk harfe göre
const byName = players;
console.table(byName);