/**
 * spread ve rest sözdizimi
 *
 * - Artık parametreler
 * - Argümanların bir kısmının toplanması
 * - Parametre oluşumu
 * - Dizi oluşturma
 * - Nesne oluşturma
 */

const numbers = [];
// console.log(numbers);

/**
 * En küçük veya en büyük sıcaklığı (sayı) bulma
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

/**
 * Referansa göre dizi ve tür oluşturma
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = a;

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * spread kullanarak birkaç diziyi tek bir dizide birleştirme
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [];
// console.log(allTemps);

/*
 * Nesne oluşturma
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = {};

// console.log(objC);

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

const finalSettings = {};

// console.log(finalSettings);
