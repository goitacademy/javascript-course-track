/**
 * Napisz klasę Blogger, by utworzyć obiekt bloggera z następującymi właściwościami:
 * - email - adres mailowy, ciąg znaków
 * - age - wiek, liczba
 * - numberOfPosts - liczba postów, liczba
 * - topics - tablica tematów, w których specjalizuje się blogger
 *
 * Klasa oczekuje jednego parametru - obiektu ustawień o takich samych właściwościach.
 *
 * - Dodaj metodę getInfo(), która zwraca ciąg znaków: User ${email} is ${age} years old and has ${numPosts} posts.
 * - Dodaj metodę updatePostCount(value), która w parametrze value przyjmuje liczbę postów, które będą dodane do użytkownika.
 */

const mango = new User({
  name: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking"],
});
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new User({
  name: "poly@mail.com",
  age: 19,
  numberOfPosts: 17,
  topics: ["sports", "gaming", "health"],
});
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
