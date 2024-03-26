/*
 * Metoda setInterval(callback, delay, args)
 */

const logger = (time) => {
  console.log(`Log co ${time} ms - ${Date.now()}`);
};

console.log("Przed wywołaniem setInterval");
setInterval(logger, 2000, 2000);
console.log("Po wywołaniu setInterval");

/*
 * Wyczyszczenie interwału za pomocą clearInterval(intervalId)
 */

const intervalId = setInterval(logger, 2000, 2000);
clearInterval(intervalId);
