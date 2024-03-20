/**
 * Formatowanie linku (endsWith)
 *
 * Napisz skrypt sprawdzający, czy wartość zmiennej
 * link kończy się znakiem /. Jeśli nie, dodaj ten znak
 * na końcu wartości link.
 * Użyj konstrukcji if...else.
 */

let link = "https://my-site.com/about";
console.log(link);

/**
* Formatowanie linku (includes i logiczne «І»)
 * Napisz skrypt sprawdzający, czy wartość zmiennej
 * link kończy się znakiem /. Jeśli nie, dodaj ten znak
 * na końcu wartości link, ale tylko wtedy,
 * gdy link zawiera podciąg "my-site".
 * Użyj konstrukcji if...else lub operatora trójargumentowego.
 */

let url = "https://somesite.com/about";
if (url.includes("my-site") && !link.endsWith("/")) {
  link += "/";
}
console.log(url);

/*
 * Wyszukiwanie w ciągu znaków przy użyciu metody includes()
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
