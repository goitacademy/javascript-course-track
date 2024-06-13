/**
 * Nesne dizisi
 *
 * - Dizi aşımı
 * - Nesneyi özellik değerine göre arama
 * - Özellik değerlerinin toplanması
 */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

console.table(friends);

/**
 * İsme göre arkadaş bulma
 */
function findFriendByName(allFriends, friendName) {}

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Tüm kullanıcıların isimlerini alıyoruz
 */
function getAllNames(allFriends) {}

// console.log(getAllNames(friends));

/**
 * Sadece çevrimiçi olan arkadaşlarımızın isimlerini alıyoruz
 */
function getOnlineFriends(allFriends) {}

// console.log(getOnlineFriends(friends));

/**
 * Bir nesne dizisi ve taşın adını içeren bir dize alan calcTotalPrice(stones, stoneName) 
 * fonksiyonunu yazın. Fonksiyon, nesneden aşağıdaki ad, fiyat ve miktara 
 * sahip taşların toplam maliyetini hesaplar ve döndürür
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];
