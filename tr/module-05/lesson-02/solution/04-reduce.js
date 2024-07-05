/**
 * Reduce metodu
 *
 * - Orijinal diziyi eleman eleman işler
 * - Geri dönen değer, geliştiricinin belirlediği şeye bağlıdır
 */
const numbers = [
  5,
  10,
  15,
  20,
  25
];
const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);
/**
 * Toplam maaşı hesaplayalım
 */
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150
};
const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
console.log(totalSalary);
/**
 * Toplam saat sayısını hesaplayın
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
    name: 'Kiwi',
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
const totalTimePlayed = players.reduce((totalTime, player) => totalTime + player.timePlayed, 0);
console.log(totalTimePlayed);
/**
 * Sepetin içindeki ürünlerin toplam tutarını hesaplıyoruz
 */
const cart = [
  {
    label: 'Apples',
    price: 100,
    quantity: 2
  },
  {
    label: 'Bananas',
    price: 120,
    quantity: 3
  },
  {
    label: 'Lemons',
    price: 70,
    quantity: 4
  }
];
const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
console.log(totalAmount);