/**
 * Funkcje arytmetyczne
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
 * Napisz skrypt, który wyświetli w konsoli zaokrąglone w górę/w dół itp.
 * wartości zmiennej value. Użyj metod Math.floor(), Math.ceil()
 * i Math.round(). Sprawdź, co zostanie wyświetlone w konsoli z wartościami 27.3 i 27.9.
 */

const value = 27.5;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));
