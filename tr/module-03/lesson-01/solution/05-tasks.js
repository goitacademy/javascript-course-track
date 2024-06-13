/**
 * Bir dizideki tüm çift sayıların toplamını hesaplayan bir kod yazın.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log("Not an even number!", number);
    continue;
  }

  console.log(`${number} - even!`);
  total += number;
}

console.log("Total: ", total);

/**
 * Konsolda kullanıcının adını ve telefon numarasını görüntüleyen bir kod yazın.
 * names ve phones değişkenleri virgülle ayrılmış isim ve telefon numarası dizelerini saklar. 
 * Dizelerdeki adların ve telefon numaralarının sıra numarası bir eşleşmeyi gösterir.
 * İsimlerin ve telefon numaralarının sayısının aynı olması garanti edilir.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

/**
 * Bir dizenin ilk ve son sözcükleri hariç tüm sözcüklerini konsola yazdıran bir kod yazın. 
 * Ortaya çıkan dize bir boşluk karakteriyle başlamamalı veya bitmemelidir.
 * Komut dosyası herhangi bir dize için çalışmalıdır.
 */

const string = "Welcome to the future";

/**
 * Bir dizideki en küçük sayıyı bulmak için bir kod yazın. 
 * Kod herhangi bir sayı dizisi için çalışmalıdır. Problemi çözmek için bir döngü kullanın.
 */

const values = [2, 17, 94, 1, 23, 37];
let min;
console.log(min); // 1
