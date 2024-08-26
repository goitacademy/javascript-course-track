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
