/**
 * Bağlantı biçimlendirme (endsWith)
 *
 * Değerinin olup olmadığını kontrol eden bir komut dosyası yazın 
 *  link değişkeni / karakteri ile biter. Değilse, sonuna ekleyin
 *  link değerinin bu karakterle değiştirilmesi.
 * if...else yapısını kullanın.
 */

let link = "https://my-site.com/about";
console.log(link);

/**
 * Referans biçimlendirme (includes ve mantıksal "VE") komut dosyası yazın
 * değerinin olup olmadığını kontrol eden bir komut dosyası yazın
 * link değişkeni / karakteri ile biter. Değilse, bu karakteri bağlantı değişkeninin sonuna ekleyin 
 * link değerinin, ancak yalnızca aşağıdaki durumlarda,
 * link "my-site" alt dizesini içeriyorsa.
 * if...else yapısını veya üçlü işleci kullanın.
 */

let url = "https://somesite.com/about";
if (url.includes("my-site") && !link.endsWith("/")) {
  link += "/";
}
console.log(url);

/*
 * includes() yöntemini kullanarak bir dize içinde arama yapma
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
