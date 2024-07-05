/**
 * Fonksiyonun çalışma bağlamı
 *
 * - Anahtar kelime this
 * - Global bağlam
 * - Nesne yöntemi bağlamı
 */
/**
 * Global bağlam
 */
function foo() {
  console.log('foo -> this', this);
}
foo();
/**
 * Nesne yönteminin bağlamı
 */
const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
  }
};
user.showTag();
/**
 * Nesne yönteminin bağlamı, ancak dış fonksiyon olarak tanımlanmış.
 */
function showTag() {
  console.log('showTag -> this', this);
  console.log('showTag -> this.tag', this.tag);
}
showTag();
const mango = { tag: 'Mango' };
mango.showUserTag = showTag;
console.log('mango', mango);
mango.showUserTag();
/**
 * Bağlam olmadan çağrı, ancak bir nesnenin yöntemi olarak ilan edildi.
 */
const poly = {
  tag: 'Poly',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  }
};
poly.showTag();
const outerShowTag = poly.showTag;
outerShowTag();
/**
 * Callback fonksiyonlarında bağlam
 */
const jacob = {
  tag: 'Jacob',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  }
};
function invokeAction(action) {
  console.log(action);
  action();
}
invokeAction(jacob.showTag);