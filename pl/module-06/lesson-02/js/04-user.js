/**
 * Napisz klasę User, która tworzy obiekt z właściwościami login i email.
 * Zadeklaruj prywatne właściwości #login i #email, do których można uzyskać
 * dostęp poprzez getter i setter login oraz email.
 */
const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});

console.log(mango.login); // Mango
mango.login = "Mangodoge";
console.log(mango.login); // Mangodoge

const poly = new User({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.login); // Poly
poly.login = "Polycutie";
console.log(poly.login); // Polycutie
