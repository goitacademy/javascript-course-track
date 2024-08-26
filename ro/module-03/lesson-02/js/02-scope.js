/**
 * - Domeniul de vizibilitate global
 * - Domeniul de vizibilitate blocked
 * - Căutarea prin lanțul de domenii de vizibilitate
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

// ❌ Eroare! Variabila a nu poate fi accesată în acest domeniu de vizibilitate
console.log(a);

for (let i = 0; i < 3; i += 1) {
  // ❌ Eroare! Variabila a nu poate fi accesată în acest domeniu de vizibilitate
  console.log(a);
}
