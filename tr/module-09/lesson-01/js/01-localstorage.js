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
/**
 * Okuma
 * Neden JSON.parse yöntemini kullanmalısınız
 */
/**
 * Silme
 */
/**
 * LocalStorage işlevleri depolayamaz
 */
function add(a, b) {
  return a + b;
}
const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  }
};