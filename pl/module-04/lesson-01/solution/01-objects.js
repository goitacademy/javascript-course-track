/**
* Obiekty
 *
 * - Tworzenie obiektu
 * - Zagnieżdżone właściwości
 * - Dostęp do właściwości poprzez kropkę
 * - Dostęp do zagnieżdżonych właściwości
 * - Dostęp do właściwości poprzez nawiasy kwadratowe
 * - Zmiana wartości właściwości
 * - Dodawanie właściwości
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
};

console.log(playlist);

playlist.newProp = 5;
playlist.rating = 4;
console.log(playlist);

console.log(playlist);
console.log(playlist.tracks);
console.log(playlist.name);

/**
 * -----------------------------------
 */
const propertyName = "tracks";
console.log(playlist.rating);
console.log(playlist["rating"]);
console.log(playlist.propertyName);
console.log(playlist[propertyName]);

/**
 * -----------------------------------
 */
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}

foo({
  a: 1,
  b: 2,
});

foo({
  a: 5,
  b: 10,
});
