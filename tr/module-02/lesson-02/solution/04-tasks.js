/**
 * Tarayıcı konsoluna yazdıran bir for döngüsü yazın
 * a'dan b'ye doğru artan sırada sayılar, ancak yalnızca sayı 5'in katı ise.
 */

const a = 100;
const b = 20;

/*
 * Tüm çift sayıların toplamını hesaplayan bir kod yazın,
 * min'den max'a kadar olan değişkenlerdeki sayı aralığında olan sayılar.
 * Örneğin, min = 0 ve max = 5 ise, aralık 0-5'tir ve içinde iki çift sayı vardır - 2 ve 4, toplamları 6'dır.
 */

const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log("Odd: ", i);
    continue;
  }

  console.log("Even: ", i);
  total += i;
}

console.log("total: ", total);
