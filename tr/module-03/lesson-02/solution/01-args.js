/**
 * Sözde dizi argümanları ve Array.from
 */

function foo() {
  console.log(arguments);
  const args = Array.from(arguments);
  console.log(args);
}

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

/**
 * Herhangi bir sayıda bağımsız değişkeni (sayılar) 
 * toplamak için bir toplama işlevi yazın)
 */

const add = function (arguments) {
  const args = Array.from(arguments);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

/**
 * Herhangi bir sayıda argüman alan ve bunların ortalama değerini 
 * döndüren bir calAverage() fonksiyonu yazın. 
 * Tüm argümanlar sadece sayı olacaktır.
 */
function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
