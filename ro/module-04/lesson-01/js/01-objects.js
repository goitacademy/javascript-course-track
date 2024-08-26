/**
 * Obiecte
 *
 * - Crearea unui obiect
 * - Proprietăți imbricate
 * - Referință la o proprietate utilizând punctul
 * - Referință la proprietățile imbricate
 * - Referință la o proprietate folosind paranteze pătrate
 * - Modificarea valorilor
 * - Adăugarea unei proprietăți
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
