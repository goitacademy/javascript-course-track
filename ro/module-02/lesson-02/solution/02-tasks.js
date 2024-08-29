/**
 * Formatarea unui link (endsWith)
 *
 * Scrie un script care verifică dacă valoarea
 * variabilei link se termină cu caracterul `/`. Dacă nu, adaugă acest caracter
 * la sfârșitul valorii link.
 * Folosește construcția if...else.
 */

let link = "https://my-site.com/about";
console.log(link);

/**
 * Formatarea unui link (includes și operatorul logic "AND")
 * Scrie un script care verifică dacă valoarea
 * variabilei link se termină cu caracterul `/`. Dacă nu, adaugă acest caracter
 * la sfârșitul valorii link, dar numai dacă link conține subșirul "my-site".
 * Folosește construcția if...else sau operatorul ternar.
 */

let url = "https://somesite.com/about";
if (url.includes("my-site") && !link.endsWith("/")) {
  link += "/";
}
console.log(url);

/*
 * Căutarea într-un șir de caractere folosind metoda includes()
 */

const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaign";

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));

const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));
