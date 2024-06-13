/**
 * Bir dizi üzerinde yineleme
 *
 * - for döngüsü ile bir dizi içinde yineleme
 * - includes yöntemi
 * - for...of döngüsü
 * - for ve for...of kullanımındaki fark
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
console.table(friends);

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}

console.table(friends);

for (let friend of friends) {
  console.log(friend);
  console.log(friends);
}

/**
 * Değerleri values değişkeninde bir dize olarak saklanan,
 * kenarları olan bir dikdörtgenin alanını hesaplamak için bir kod yazın.
 * Değerlerin bir boşlukla ayrılması garanti edilmelidir.
 */

const values = "8 11";

/**
 * fruits dizisini yinelemek için bir kod yazın.
 * Dizinin her elemanı için konsola
 * eleman_sayısı: eleman_değeri biçiminde bir dize yazdırın.
 * Elemanların numaralandırması 1 ile başlamalıdır.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
