/**
 * Funcții aritmetice
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log("elementWidth: ", elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
console.log("elementHeight: ", elementHeight);

/**
 * Scrie un script care afișează în consolă valorile rotunjite în sus/jos etc.
 * ale variabilei value. Folosește metodele Math.floor(), Math.ceil()
 * și Math.round(). Verifică ce se afișează în consolă pentru valorile 27.3 și 27.9.
 */

const value = 27.5;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));
