/**
 * Blogger sınıfını, aşağıdaki özelliklere sahip bir blogger nesnesi oluşturmak için yazın:
 * - email - email adresi, bir dize
 * - age - yaş, bir sayı
 * - numberOfPosts - gönderi sayısı, bir sayı
 * - topics - blogger'ın uzmanlaştığı konuların dizisi
 *
 * Sınıf, aynı adı taşıyan özelliklere sahip bir yapılandırma nesnesi bekler.
 *
 * - getInfo() metodu ekleyin, bir dize döndürür: User ${email} is ${age} years old and has ${numPosts} posts.
 * - updatePostCount(value) metodunu ekleyin, bu metod parametre olarak kullanıcıya eklenecek gönderi sayısını alır.
 */
const mango = new User({
  name: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: [
    'tech',
    'cooking'
  ]
});
console.log(mango.getInfo());
// User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo());
// User mango@mail.com is 24 years old and has 25 posts
const poly = new User({
  name: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: [
    'sports',
    'gaming',
    'health'
  ]
});
console.log(poly.getInfo());
// User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo());  // User poly@mail.com is 19 years old and has 21 posts
