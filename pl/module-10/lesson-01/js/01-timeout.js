/*
 * Metoda window.setTimeout(callback, delay, args)
 */

console.log("Przed wywołaniem setTimeout");

console.log("1 - Wewnątrz wywołania zwrotnego dla setTimeout");

console.log("2 - Wewnątrz wywołania zwrotnego dla setTimeout");

console.log("Po wywołaniu setTimeout");

/*
 * Czyszczenie limitu czasu za pomocą clearTimeout(timeoutId)
 */
const logger = (time) => {
  console.log(`Log po ${time} ms, ponieważ limit czasu nie został anulowany`);
};

/**
 * Możliwość przekazywania parametrów dla wywołania zwrotnego
 */
const id = setTimeout((name, country) => {
  console.log(`Hello, my name is ${name}, I'm from ${country}`);
}, 1000);
