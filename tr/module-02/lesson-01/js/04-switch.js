/**
 * Switch operatörü
 */

const username = "Mango";

/**
 * Switch kullanarak görev kodunu yeniden düzenleyin.
 *
 * Son teslim tarihine 0 gün kalmışsa, "Today" satırını yazdırın
 * Son teslim tarihine 1 gün kalmışsa, "Tomorrow" satırını yazdırın
 * Son teslim tarihine 2 gün kalmışsa, "Overmorrow" satırını yazdırın
 * Son teslim tarihine 3+ gün kalmışsa, "Date in the future" satırını yazdırın
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
 * Ürün teslimatı seçeneğini seçmek için bir komut dosyası yazın.
 * Seçenek, option değişkeninde saklanır: 1 - kendi kendine teslimat, 2 - kurye, 3 - posta
 *
 * Seçeneğe bağlı olarak değişken mesaja bir mesaj yazın.
 * - 'Ürünleri yarın saat 12:00'den itibaren ofisimizden teslim alabileceksiniz'.
 * - 'Kurye siparişi yarın 9:00 - 18:00 saatleri arasında teslim edecek'.
 * - 'Paket bugün gönderilecek'.
 * - 'Bir yönetici sizi geri arayacak'
 */

const option = 1;
let message = "";

console.log(message);
