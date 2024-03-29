/**
 * Metoda forEach(callback)
 * - Iteruje po oryginalnej tablicy element po elemencie
 * - Nie zwraca niczego
 * - Zastępuje klasyczne for, jeśli nie ma potrzeby przerywania pętli
 */

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number) {
  console.log("number", number);
});

console.log(numbers);

/**
 * Przeprowadź refaktoryzację kodu przy użyciu metody forEach i funkcji strzałkowych.
 */
function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Przeprowadź refaktoryzację kodu przy użyciu metody forEach i funkcji strzałkowych.
 */
function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

/**
 * Przeprowadź refaktoryzację kodu przy użyciu metody forEach i funkcji strzałkowych.
 */
function calсulateAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
