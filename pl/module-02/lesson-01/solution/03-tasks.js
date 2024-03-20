/**
 * Napisz skrypt wyświetlający godziny i minuty w konsoli przeglądarki jako
 * ciąg znaków w formacie "14 godz. 26 min.". Jeśli wartość zmiennej minutes wynosi 0,
 * wyświetl ciąg "14 godz.", bez minut.
 */

const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
  timestring = `${hours} г. ${minutes} хв.`;
} else {
  timestring = `${hours} г.`;
}
console.log(timestring);

/**
 * Napisz skrypt wyświetlający czas zakończenia projektu. Użyj if...else.
 *
 * Jeśli termin upływa za 0 dni - wyświetl wiersz "Today"
 * Jeśli termin upływa za 1 dzień - wyświetl wiersz "Tomorrow"
 * Jeśli termin upływa za 2 dni - wyświetl wiersz "Overmorrow"
 * Jeśli termin upływa za 3+ dni - wyświetl wiersz "Date in the future"
 */

const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log("Today");
} else if (daysUntilDeadline === 1) {
  console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
  console.log("Overmorrow");
} else {
  console.log("Date in the future");
}
