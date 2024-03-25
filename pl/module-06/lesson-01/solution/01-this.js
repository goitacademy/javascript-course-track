/**
 * Kontekst funkcji
 *
 * - Słowo kluczowe this
 * - Kontekst globalny
 * - Kontekst metody obiektu
 */

/**
 * Kontekst globalny
 */
function foo() {
  console.log("foo -> this", this);
}

foo();

/**
 * Kontekst metody obiektu
 */

const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this);
  },
};

user.showTag();

/**
 * Kontekst metody obiektu, ale zadeklarowany jako funkcja zewnętrzna.
 */

function showTag() {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
}

showTag();

const mango = {
  tag: "Mango",
};

mango.showUserTag = showTag;
console.log("mango", mango);

mango.showUserTag();

/**
 * Wywołanie bez kontekstu, ale zadeklarowane jako metoda obiektu.
 */

const poly = {
  tag: "Poly",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

poly.showTag();

const outerShowTag = poly.showTag;

outerShowTag();

/**
 * Kontekst w funkcjach wywołań zwrotnych
 */

const jacob = {
  tag: "Jacob",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

function invokeAction(action) {
  console.log(action);
  action();
}

invokeAction(jacob.showTag);
