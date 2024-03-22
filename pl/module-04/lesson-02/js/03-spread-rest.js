/**
 * Składnia spread і rest
 *
 * - Parametry reszty
 * - Zbiór części argumentów
 * - Wejście parametrów
 * - Tworzenie tablicy
 * - Tworzenie obiektu
 */

const numbers = [];
// console.log(numbers);

/**
 * Znalezienie najmniejszej lub największej temperatury (liczby)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

/**
 * Tworzenie tablicy i typu przez odniesienie
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = a;

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Łączymy kilka tablic w jedną przy użyciu spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
// console.log(allTemps);

/*
 * Tworzenie obiektu
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {};

// console.log(objC);

/**
 * Aktualizujemy ustawienia użytkownika
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {};

// console.log(finalSettings);
