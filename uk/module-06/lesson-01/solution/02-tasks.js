function foo() {
  console.log("foo -> this", this);
}

foo(); // Який this ???

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

book.showThis(); // Який this ???

const outerShowThis = book.showThis;
outerShowThis(); // Який this ???

const outerShowTitle = book.showTitle;
outerShowTitle(); // Який this ???
