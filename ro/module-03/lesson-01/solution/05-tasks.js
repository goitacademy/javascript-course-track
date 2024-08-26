/**
 * Scrie un script care calculează suma tuturor numerelor pare dintr-un array.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log("Not an even number!", number);
    continue;
  }

  console.log(`${number} - even!`);
  total += number;
}

console.log("Total: ", total);

/**
 * Scrie un script care afișează în consolă numele și numărul de telefon al utilizatorului.
 * Variabilele names și phones conțin șiruri de caractere cu numele și numerele de telefon
 * separate prin virgule. Fiecare nume din `names` corespunde unui număr de telefon din 
 * `phones`, iar ordinea lor este aceeași. Numărul de nume și numere de telefon va fi 
 * întotdeauna egal.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

/**
 * Scrie un script care afișează în consolă toate cuvintele dintr-un șir de caractere,
 * cu excepția primului și ultimului cuvânt. Șirul rezultat nu trebuie să înceapă
 * sau să se termine cu spațiu.
 * Scriptul trebuie să funcționeze corect pentru orice șir de caractere.
 */

const string = "Welcome to the future";

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37];
let min;
console.log(min); // 1
