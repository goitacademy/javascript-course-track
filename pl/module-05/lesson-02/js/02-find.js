/**
 * Metoda find
 *
 * - Iteruje po oryginalnej tablicy element po elemencie
 * - Zwraca pierwszy element spełniający warunek lub undefined
 */

const numbers = [5, 10, 15, 20, 25];

const number = numbers;
// console.log(number);

/**
 * -----------------------------
 */
const cars = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
];

/**
 * Szukamy samochód według modelu
 */
const getCarByModel = (cars, model) => {};

// console.log(getCarByModel(allCars, "F-150"));
// console.log(getCarByModel(allCars, "CX-9"));
// console.log(getCarByModel(allCars, "Cayenne"));

/**
 * Szukamy samochód według typu nadwozia
 */
const getCarByType = (cars, type) => {};

// console.log(getCarByType(allCars, "sedan"));
// console.log(getCarByType(allCars, "truck"));
// console.log(getCarByType(allCars, "tank"));
