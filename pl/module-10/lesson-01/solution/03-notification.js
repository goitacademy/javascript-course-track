/**
 * - Pokazujemy i ukrywamy dodając/usuwając klasę is-visible
 * - Ukrywamy po określonym czasie
 * - Ukrywamy po kliknięciu
 * - Pamiętaj o wyzerowaniu licznika czasu
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector(".js-alert");

notification.addEventListener("click", onNotificationClick);

showNotification();

/*
 * Funkcje
 */
function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  notification.classList.add("is-visible");

  timeoutId = setTimeout(() => {
    console.log(
      "Automatycznie zamykamy powiadomienie, aby nie pozostawało otwarte"
    );
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  notification.classList.remove("is-visible");
}
