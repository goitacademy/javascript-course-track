/*
 * Metoda window.setTimeout(callback, delay, args)
 */

console.log("Przed wywołaniem setTimeout");

setTimeout(() => {
  console.log("1 - Wewnątrz wywołania zwrotnego dla setTimeout");
}, 2000);

setTimeout(() => {
  console.log("2 - Wewnątrz wywołania zwrotnego dla setTimeout");
}, 1000);

console.log("Po wywołaniu setTimeout");

/*
 * Czyszczenie limitu czasu za pomocą clearTimeout(timeoutId)
 */
const logger = (time) => {
  console.log(`Log po ${time} ms, ponieważ limit czasu nie został anulowany`);
};

const timerId = setTimeout(logger, 2000, 2000);
console.log(timerId);

clearTimeout(timerId);

/**
 * Możliwość przekazywania parametrów dla wywołania zwrotnego
 */
const id = setTimeout(
  (name, country) => {
    console.log(`Hello, my name is ${name}, I'm from ${country}`);
  },
  1000,
  "Alice",
  "Ukraine"
);
