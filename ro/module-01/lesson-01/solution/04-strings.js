/**
 * Șiruri de caractere
 *
 * - Concatenarea șirurilor de caractere
 * - Template literals
 * - Lungimea unui șir de caractere
 * - Indexarea elementelor
 * - Imuabilitatea șirurilor de caractere
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
 * Construiește o frază folosind template literals
 * A has B bots in stock, unde A și B sunt variabile inserate în șir.
 */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
