/**
 * - Gösterirken ve gizlerken, is-visible sınıfını ekleyerek/kaldırarak
 * - Belirli bir süre sonra gizliyoruz
 * - Tıklama ile gizliyoruz
 * - Zamanlayıcıyı temizlemeyi unutmuyoruz
 */
const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');
notification.addEventListener('click', onNotificationClick);
showNotification();
/*
 * Fonksiyonlar
 */
function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}
function showNotification() {
  notification.classList.add('is-visible');
  timeoutId = setTimeout(() => {
    console.log('Bildirimi otomatik olarak kapatıyoruz, böylece açık kalmaz');
    hideNotification();
  }, NOTIFICATION_DELAY);
}
function hideNotification() {
  notification.classList.remove('is-visible');
}