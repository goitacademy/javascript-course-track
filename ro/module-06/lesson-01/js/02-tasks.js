function foo() {
  console.log("foo -> this", this);
}

foo(); //  this ???

/**
 * -------------------------
 */
const book = {
  title: "React for beginners",
  showThis() {
    console.log("showThis -> this", this);
  },
  showTitle() {
    console.log("showTitle -> this.title", this.title);
  },
};

book.showThis(); // Care this ???

const outerShowThis = book.showThis;
outerShowThis(); // Care this ???

const outerShowTitle = book.showTitle;
outerShowTitle(); // Care this ???

/**
 * Scrie metoda `calcTotalPrice(stoneName)`, care primește numele pietrei pretioase și
 * calculează și returnează costul total al pietrelor cu acel nume, prețul și
 * cantitatea din proprietatea `stones`.
 */

const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {},
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600
