/**
 * Funcții
 *
 * - Declararea și apelarea funcțiilor
 * - Parametri și argumente
 * - Returnarea valorilor
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
 * Scrie o funcție calcBMI(weight, height) care calculează și returnează indicele
 * de masă corporală (IMC) al unei persoane. Pentru aceasta, trebuie să împarți
 * greutatea la pătratul înălțimii.
 *
 * Greutatea și înălțimea vor fi furnizate ca string. Numerele zecimale pot
 * fi date sub forma 24.7 sau 24,7, adică separatorul pentru partea zecimală
 * poate fi o virgulă.
 *
 * Indicele de masă corporală trebuie rotunjit la o zecimală.
 */

function calcBMI(weight, height) {}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8
