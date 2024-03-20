/**
 * Operator switch
 */

const username = "Mango";

/**
 * Przeprowadź refaktoryzację kodu zadania za pomocą switch.
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

/*
 * Napisz skrypt do wyboru opcji dostawy towarów.
 * Opcja jest przechowywana w zmiennej option: 1 - odbiór osobisty, 2 - kurier, 3 - poczta
 *
 * Do zmiennej message wpisz wiadomość w zależności od wybranej opcji.
 * - 'Towar będzie dostępny do odbioru jutro od godziny 12:00 w naszym biurze'
 * - 'Kurier dostarczy zamówienie jutro pomiędzy 9:00 a 18:00'
 * - 'Paczka zostanie wysłana dzisiaj'
 * - 'Nasz menedżer wkrótce skontaktuje się z Tobą'
 */

const option = 1;
let message = "";

console.log(message);
