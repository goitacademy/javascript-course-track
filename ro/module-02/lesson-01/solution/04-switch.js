/**
 * Operatorul switch
 */

const username = "Mango";

switch (value) {
  case "Mango":
    console.log("case 1");
    break;
  case "Poly":
    console.log("case 2");
    break;
  default:
    console.log("Default case");
}

/**
 * Efectuează refactorizarea codului folosind switch.
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

/*
 * Scrie un script pentru selectarea opțiunii de livrare a produsului.
 * Opțiunea este stocată în variabila option: 1 - ridicare personală, 2 - curier, 3 - poștă.
 *
 * În variabila message, salvează mesajul în funcție de opțiune.
 * - 'Puteți ridica produsul de la biroul nostru mâine de la 12:00'
 * - 'Curierul va livra comanda mâine între orele 9:00 și 18:00'
 * - 'Coletul va fi expediat astăzi'
 * - 'Vă va contacta un manager'
 */

const option = 1526;
let message = "";

switch (option) {
  case 1:
    message = "Puteți ridica produsul de la biroul nostru mâine de la 12:00";
    break;

  case 2:
    message = "Curierul va livra comanda mâine între orele 9:00 și 18:00";
    break;

  case 3:
    message = "Coletul va fi expediat astăzi";
    break;

  default:
    message = "Vă va contacta un manager";
}

console.log(message);
