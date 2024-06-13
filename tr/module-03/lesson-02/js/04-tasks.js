/**
 * Bir dizi alan ve dizideki her öğe için konsola <öğe numarası> - <öğe değeri>
 * biçiminde bir mesaj görüntüleyecek bir döngü kullanan bir 
 * logItems(items) işlevi yazın. Eleman numaralandırması 1 ile başlamalıdır.
 *
 * Örneğin, ['Mango', 'Poly', 'Ajax'] dizisinin 0 indeksli
 * ilk elemanı için 1 - Mango görüntülenecek 
 * ve 2 indeksi için 3 - Ajax görüntülenecektir.
 */

function logItems(items) {}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Şunları yazdıran bir printInfo(names, phones) işlevi yazın 
 * kullanıcının adını ve telefon numarasını konsola gönderir. 
 * names ve phones parametrelerine virgülle ayrılmış bir dizi isim ve telefon numarası aktarılır. 
 * Satırlardaki isim ve telefon numaralarının sıra numarası eşleşmeyi gösterir. 
 * İsimlerin ve telefon numaralarının sayısının aynı olması garanti edilir.
 */

function printInfo(names, phones) {}

printInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300"
);

/**
 * Dakika değerini saat ve dakika HH:MM biçiminde
 * bir dizeye dönüştüren 
 * formatTime(minutes) işlevini yazın.
 */

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
