function foo() {
  console.log("foo -> this", this);
}

foo(); // Jaki this ???

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

book.showThis(); // Jaki this ???

const outerShowThis = book.showThis;
outerShowThis(); // Jaki this ???

const outerShowTitle = book.showTitle;
outerShowTitle(); // Jaki this ???
