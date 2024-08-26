/**
 * Scrie un script pentru a afișa orele și minutele în consola browser-ului
 * sub formă de șir de caractere în formatul "14 h 26 min". Dacă valoarea
 * variabilei minutes este 0, atunci afișează șirul "14 h", fără minute.
 */

const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
  timestring = `${hours} h ${minutes} min`;
} else {
  timestring = `${hours} h`;
}
console.log(timestring);

/**
 * Scrie un script pentru a afișa timpul rămas până la deadline-ul proiectului. Folosește if...else.
 *
 * Dacă până la deadline mai sunt 0 zile - afișează șirul "Today"
 * Dacă mai este 1 zi - afișează șirul "Tomorrow"
 * Dacă mai sunt 2 zile - afișează șirul "Overmorrow"
 * Dacă mai sunt 3+ zile - afișează șirul "Date in the future"
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
