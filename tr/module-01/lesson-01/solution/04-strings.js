/**
 * Dize
 *
 * - Dize birleştirme
 * - Şablon dizgileri
 * - Dize uzunluğu
 * - Elemanların dizinlenmesi
 * - Dize değişmezliği
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
 * Şablon dizeleri kullanarak cümleyi oluştur
 * A has B bots in stock, burada A, B - cümleye yerleştirilmiş değişkenlerdir.
 */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
