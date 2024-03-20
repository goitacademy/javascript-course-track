/*
 * Funkcje
 *
 * - Deklarowanie i wywoływanie funkcji
 * - Parametry i argumenty
 * - Zwracanie wartości
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
 * Napisz funkcję calcBMI(weight, height) która oblicza i zwraca wskaźnik
 * masy ciała człowieka. Aby to zrobić, podziel wagę przez
 * kwadrat wzrostu.
 *
 * Waga i wzrost będą specjalnie przekazywane jako ciągi znaków. Liczby niecałkowite mogą
 * być podane jako 24.7 lub 24,7, tzn. przecinek może być użyty jako
 * separator części ułamkowej.
 *
 * Wskaźnik masy ciała należy zaokrąglić do jednego miejsca po przecinku.
 */

function calcBMI(weight, height) {}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8
