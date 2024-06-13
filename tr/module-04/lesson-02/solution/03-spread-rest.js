/**
 * spread ve rest sözdizimi
 *
 * - Artık parametreler
 * - Argümanların bir kısmının toplanması
 * - Parametre oluşumu
 * - Dizi oluşturma
 * - Nesne oluşturma
 */

const numbers = [
  1000,
  ...[1, 2, 3],
  5000,
  ...[4, 5, 6],
  7000,
  ...[7, 8, 9],
  9000,
];

console.log(numbers);

/**
 * En küçük veya en büyük sıcaklığı (sayı) bulma
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

console.log(Math.max(1, 4, 17, 5, 6));
console.log(Math.min(...temps));
console.log(temps);

/**
 * Referansa göre dizi ve tür oluşturma
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

console.log("a: ", a);
console.log("b: ", b);

console.log(a[0] === b[0]);
console.log(a === b);

a[0].x = 1000;

console.log("a: ", a);
console.log("b: ", b);

/*
 * spread kullanarak birkaç diziyi tek bir dizide birleştirme
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);

/*
 * Nesne oluşturma
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };

const objC = {
  ...objA,
  x: 10,
  ...objB,
  y: 20,
};

console.log(objC);

/**
 * Kullanıcı ayarlarını güncelleme
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

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);
