/**
 * Scrie o buclă for care afișează în consola browser-ului
 * numerele în ordine crescătoare de la a la b, dar numai dacă numărul este multiplul lui 5.
 */

const a = 100;
const b = 20;

/*
 * Scrie un script care calculează suma tuturor numerelor pare
 * dintr-un interval de numere specificat de variabilele min și max.
 * De exemplu, dacă min=0 și max=5, atunci intervalul este 0-5, iar în acesta sunt două numere pare - 2 și 4, suma lor fiind 6.
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
