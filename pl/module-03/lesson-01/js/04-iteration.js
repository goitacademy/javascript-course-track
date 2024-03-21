/**
 * Iteracja po tablicy
 *
 * - Iteracja po tablicy za pomocą pętli for
 * - Metoda includes
 * - Pętla for...of
 * - Różnica w używaniu pętli for i for...of
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
console.table(friends);

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}

console.table(friends);

for (let friend of friends) {
  console.log(friend);
  console.log(friends);
}

/**
 * Napisz skrypt obliczający pole prostokąta o bokach,
 * których wartości są przechowywane w zmiennej values jako ciąg znaków.
 * Wartości muszą być oddzielone spacją.
 */

const values = "8 11";

/**
 * Napisz skrypt iterujący po tablicy fruits.
 * Dla każdego elementu tablicy wypisz na konsolę wiersz
 * w formacie numer_elementu: wartość_elementu.
 * Numeracja elementów powinna zaczynać się od 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
