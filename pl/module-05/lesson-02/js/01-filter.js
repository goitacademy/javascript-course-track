/**
 * Metoda filter
 *
 * - Iteruje po oryginalnej tablicy element po elemencie
 * - Zwraca nową tablicę (z elementami lub pustą)
 * - Dodaje do zwracanej tablicy elementy, które spełniają warunek funkcji zwrotnej.
 *    - jeśli wywołanie zwrotne zwróciło wartość true, element jest dodawany do zwracanej tablicy
 *    - jeśli wywołanie zwrotne zwróci wartość false, element NIE jest dodawany do zwracanej tablicy
 */

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers;
console.log(filteredNumbers);

/**
 * ---------------------------
 */
const allCars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/**
 * Niech funkcja filterByPrice zwraca tablicę samochodów, których cena jest mniejsza niż 
 * wartość parametru threshold.
 */

const filterByPrice = (cars, threshold) => {};

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/**
 * Niech funkcja getCarsWithDiscount zwraca tablicę samochodów,
 * których właściwość onSale ma wartość true.
 */

const getCarsWithDiscount = (cars) => {};

// console.table(getCarsWithDiscount(allCars));

/**
 * Niech funkcja getCarsWithType zwraca tablicę samochodów, których typ jest zgodny
 * z wartością parametru type.
 */

const getCarsWithType = (cars, type) => {};

// console.table(getCarsWithType(allCars, "suv"));
// console.table(getCarsWithType(allCars, "sedan"));
