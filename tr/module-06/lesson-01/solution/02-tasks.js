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
outerShowTitle();  // Bu this nedir ???
