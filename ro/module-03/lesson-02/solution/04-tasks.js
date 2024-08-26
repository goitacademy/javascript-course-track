/**
 * Scrie o funcție `logItems(items)` care primește un array și folosește o buclă
 * pentru a afișa în consolă un mesaj pentru fiecare element din array în
 * formatul <numărul elementului> - <valoarea elementului>. Numerotarea elementelor
 * trebuie să înceapă de la 1.
 *
 * De exemplu, pentru primul element din array-ul ['Mango', 'Poly', 'Ajax'] cu
 * indexul 0, va afișa 1 - Mango, iar pentru indexul 2 va afișa 3 - Ajax.
 */

function logItems(items) {}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Scrie o funcție `printInfo(names, phones)` care afișează
 * în consolă numele și numărul de telefon al utilizatorului. Parametrii
 * `names` și `phones` vor primi șiruri de caractere care conțin numele și 
 * numerele de telefon, separate prin virgule. Fiecare nume din `names` corespunde 
 * unui număr de telefon din `phones`, iar ordinea lor este aceeași. Numărul de 
 * nume și numere de telefon va fi întotdeauna egal.
 */

function printInfo(names, phones) {}

printInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300"
);

/**
 * Scrie o funcție `formatTime(minutes)` care transformă valoarea
 * `minutes` (numărul de minute) într-un șir de caractere în formatul
 * ore și minute HH:MM.
 */

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
