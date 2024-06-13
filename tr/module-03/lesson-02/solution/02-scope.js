/**
 * - Küresel kapsam
 * - Bloklanmış görüş alanı
 * - Kapsam zincirine göre arama
 */

const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  const a = 20;
  console.log(a); // 20
  console.log(globalValue); // 10

  for (let i = 0; i < 5; i += 1) {
    console.log(a); // 20
    console.log(globalValue); // 10

    if (i === 2) {
      console.log(a); // 20
      console.log(globalValue); // 10
    }
  }
}

// ❌ Hata! a değişkeni bu kapsamda mevcut değil
console.log(a);

for (let i = 0; i < 3; i += 1) {
  // ❌ Hata! a değişkeni bu kapsamda mevcut değil
  console.log(a);
}
