/**
 * login ve email özelliklerine sahip bir nesne oluşturan bir User sınıfı yazın.
 * aracılığıyla erişilebilen #login ve #email özel özelliklerini bildirin
 * getter ve setter login ve email.
 */
const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof'
});
console.log(mango.login);
// Mango
mango.login = 'Mangodoge';
console.log(mango.login);
// Mangodoge
const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com'
});
console.log(poly.login);
// Poly
poly.login = 'Polycutie';
console.log(poly.login);  // Polycutie
