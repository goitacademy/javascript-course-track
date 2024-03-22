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

/**
 * -----------------------------------
 */
const propertyName = "tracks";

/**
 * -----------------------------------
 */
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}
