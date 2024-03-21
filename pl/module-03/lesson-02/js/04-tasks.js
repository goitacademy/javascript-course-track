/**
 * Napisz funkcję logItems(items), która otrzymuje tablicę i używa pętli,
 * która dla każdego elementu w tablicy wyświetli w konsoli komunikat w
 * formacie <numer elementu> - <wartość elementu>. Numeracja elementów
 * musi zaczynać się od 1.
 *
 * Na przykład dla pierwszego elementu tablicy ['Mango', 'Poly', 'Ajax'] z
 * indeksem 0 zostanie wyświetlone 1 - Mango, а dla indeksu 2 zostanie wyświetlone 3 - Ajax.
 */

function logItems(items) {}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Napisz funkcję printInfo(names, phones) która wyświetli w
 * konsoli imię oraz numer telefonu użytkownika. Parametry
 * names i phones zostaną przekazane jako oddzielone przecinkami
 * ciągi imion i numerów telefonów. Liczba porządkowa imion i
 * numerów telefonów w ciągach wskazuje na dopasowanie. Liczba imion
 * i numerów telefonów musi być taka sama.
 */

function printInfo(names, phones) {}

printInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300"
);

/**
 * Napisz funkcję formatTime(minutes), która konwertuje wartość
 * minutes (liczba minut) na ciąg znaków w formacie godzin
 * i minut HH:MM.
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
