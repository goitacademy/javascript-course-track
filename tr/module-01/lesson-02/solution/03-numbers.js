/**
 * Aritmetik Fonksiyonlar
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
 * Yukarı veya aşağı yuvarlanmış değişken value'ni
 * konsola yazdıran bir betik yazın. Math.floor(), Math.ceil()
 * ve Math.round() metodlarını kullanın. 27.3 ve 27.9 değerleri için konsolda ne olacağını kontrol edin.
 */

const value = 27.5;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));
