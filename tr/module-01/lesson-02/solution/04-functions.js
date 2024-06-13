/*
 * Özellikler
 *
 * - Bir fonksiyon bildirme ve çağırma
 * - Parametreler ve argümanlar
 * - Bir değer döndürme
 */

function add(x, y) {
  console.log("add function execution");
  console.log(x, y);
  return x + y;
}

const r1 = add(5, 3);
console.log("r1: ", r1);

const r2 = add(10, 15);
console.log("r2: ", r2);

const r3 = add(30, 50);
console.log("r3: ", r3);

/**
 * İndeksi hesaplayan ve döndüren bir calcBMI(ağırlık, boy) işlevi yazın
 * Bir kişinin vücut kütlesinin. Bunu yapmak için, ağırlığı
 * yüksekliğin karesi.
 *
 * Ağırlık ve boy bilerek string olarak aktarılacaktır. Tamsayı olmayan sayılar
 * 24.7 veya 24.7 şeklinde, yani kesirli sayıların ayırıcısı olarak verilebilir.
 * kısmı virgül olabilir.
 *
 * Vücut kitle indeksi bir ondalık basamağa yuvarlanmalıdır.
 */

function calcBMI(weight, height) {}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8
