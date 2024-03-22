/**
 * Tablica obiektów
 *
 * - Iterowanie po tablicy
 * - Wyszukiwanie obiektu według wartości właściwości
 * - Kolekcja wartości właściwości
 */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

console.table(friends);

/**
 * Wyszukiwanie znajomego według imienia
 */
function findFriendByName(allFriends, friendName) {}

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Otrzymujemy imiona wszystkich znajomych
 */
function getAllNames(allFriends) {}

// console.log(getAllNames(friends));

/**
 * Otrzymujemy imiona tylko tych znajomych, którzy są online
 */
function getOnlineFriends(allFriends) {}

// console.log(getOnlineFriends(friends));

/**
 * Napisz funkcję calcTotalPrice(stones, stoneName),
 * która przyjmuje tablicę obiektów i ciąg znaków z nazwą kamienia.
 * Funkcja oblicza i zwraca całkowity koszt kamieni o
 * o określonej nazwie, cenie i ilości z obiektu.
 */

const stones = [
  { name: "Szmaragd", price: 1300, quantity: 4 },
  { name: "Diament", price: 2700, quantity: 3 },
  { name: "Szafir", price: 400, quantity: 7 },
  { name: "Kruszony kamień", price: 200, quantity: 2 },
];
