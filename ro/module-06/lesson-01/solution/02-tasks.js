function foo() {
  console.log("foo -> this", this);
}

foo(); // Care this ???

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
