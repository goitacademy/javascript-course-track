/**
 * - Gösterirken ve gizlerken, is-visible sınıfını ekleyerek/kaldırarak
 * - Belirli bir süre sonra gizliyoruz
 * - Tıklama ile gizliyoruz
 * - Zamanlayıcıyı temizlemeyi unutmuyoruz
 */
const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');
/*
 * Fonksiyonlar
 */
function onNotificationClick() {
}
function showNotification() {
  console.log('Bildirimi otomatik olarak kapatıyoruz, böylece açık kalmaz');
}
function hideNotification() {
}