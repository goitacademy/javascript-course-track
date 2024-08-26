/**
 * Iterații printr-un array
 *
 * - Iterații prin array folosind bucla for
 * - Metoda includes
 * - Bucla for...of
 * - Diferențele între utilizarea for și for...of
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
 * Scrie un script pentru calcularea suprafeței unui dreptunghi ale cărui
 * laturi sunt stocate în variabila values sub formă de șir de caractere.
 * Valorile sunt separate printr-un spațiu.
 */

const values = "8 11";

/**
 * Scrie un script pentru iterarea prin array-ul fruits.
 * Pentru fiecare element din array, afișează în consolă un șir
 * în formatul numar_element: valoare_element.
 * Numerotarea elementelor trebuie să înceapă de la 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
