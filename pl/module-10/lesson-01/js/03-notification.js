/**
 * - Pokazujemy i ukrywamy dodając/usuwając klasę is-visible
 * - Ukrywamy po określonym czasie
 * - Ukrywamy po kliknięciu
 * - Pamiętaj o wyzerowaniu licznika czasu
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector(".js-alert");

/*
 * Funkcje
 */
function onNotificationClick() {}

function showNotification() {
  console.log(
    "Automatycznie zamykamy powiadomienie, aby nie pozostawało otwarte"
  );
}

function hideNotification() {}
