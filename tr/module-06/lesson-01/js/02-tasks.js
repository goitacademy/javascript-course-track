function foo() {
  console.log('foo -> this', this);
}
foo();
// Bu this nedir ???
/**
 * -------------------------
 */
const book = {
  title: 'React for beginners',
  showThis() {
    console.log('showThis -> this', this);
  },
  showTitle() {
    console.log('showTitle -> this.title', this.title);
  }
};
book.showThis();
// Bu this nedir ???
const outerShowThis = book.showThis;
outerShowThis();
// Bu this nedir ???
const outerShowTitle = book.showTitle;
outerShowTitle();
// Bu this nedir ???
/**
 * Bir taş adı alan bir calcTotalPrice(stoneName) yöntemi yazın ve
 * taşların toplam maliyetini hesaplar ve bu ad, fiyat ve
 * stones özelliğinden gelen miktar.
 */
const chopShop = {
  stones: [
    {
      name: 'Emerald',
      price: 1300,
      quantity: 4
    },
    {
      name: 'Diamond',
      price: 2700,
      quantity: 3
    },
    {
      name: 'Sapphire',
      price: 1400,
      quantity: 7
    },
    {
      name: 'Ruby',
      price: 800,
      quantity: 2
    }
  ],
  calcTotalPrice(stoneName) {
  }
};
console.log(chopShop.calcTotalPrice('Emerald'));
// 5200
console.log(chopShop.calcTotalPrice('Diamond'));
// 8100
console.log(chopShop.calcTotalPrice('Sapphire'));
// 9800
console.log(chopShop.calcTotalPrice('Ruby'));  // 1600
