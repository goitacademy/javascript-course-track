/**
 * LocalStorage
 */
const LS_KEY = 'Array of names';
const names = [
  'Alice',
  'Kate',
  'Emma'
];
/**
 * Kaydet
 * Neden JSON.stringify yöntemini kullanmalısınız
 */
localStorage.setItem(LS_KEY, JSON.stringify(names));
/**
 * Okuma
 * Neden JSON.parse yöntemini kullanmalısınız
 */
const value = localStorage.getItem(LS_KEY);
console.log(value);
console.log(JSON.parse(value));
/**
 * Silme
 */
localStorage.removeItem(LS_KEY);
/**
 * LocalStorage işlevleri depolayamaz
 */
function add(a, b) {
  return a + b;
}
localStorage.setItem('my function', JSON.stringify(add));
console.log(localStorage.getItem('my function'));
const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  }
};
localStorage.setItem('my function', JSON.stringify(calculator));
console.log(localStorage.getItem('my function'));