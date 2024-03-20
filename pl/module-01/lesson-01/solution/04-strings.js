/**
 * Ciągi znaków
 *
 * - Konkatenacja ciągów znaków
 * - Interpolacja ciągów znaków
 * - Długość ciągu znaków
 * - Indeksowanie elementów
 * - Niezmienność ciągów znaków
 */

const firstName = "Chelsy";
const lastName = "Emerald";
const fullName = "Chelsy" + " " + "Emerald";
console.log(fullName);

const quantity = 15;
const orderMsg = `You ordered ${quantity} bots`;
console.log(orderMsg);

const message = "This string is 28 chars long";
console.log(message.length);

/**
 * Utwórz frazę przy użyciu interpolacji ciągów
 * A has B bots in stock, gdzie A, B są zmiennymi wstawionymi do ciągu.
 */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
