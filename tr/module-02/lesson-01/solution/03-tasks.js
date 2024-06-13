/**
 * Tarayıcı konsolunda saat ve dakikaları şu şekilde görüntülemek için bir komut dosyası yazın
 * "14 saat 26 dakika" biçiminde bir satır. Minutes değişkeninin değeri 0 ise,
 * sonra dakikalar olmadan "14 saat" dizesini yazdırır.
 */

const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
  timestring = `${hours} saat. ${minutes} dk.`;
} else {
  timestring = `${hours} saat.`;
}
console.log(timestring);

/**
 * Projenin son teslim tarihini görüntülemek için bir kod yazın. if...else kullanın.
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
