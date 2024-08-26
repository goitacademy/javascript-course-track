/**
 * Contextul de execuție al funcției
 *
 * - Cuvântul cheie `this`
 * - Contextul global
 * - Contextul unui method object
 */

/**
 * Contextul global
 */
function foo() {
  console.log("foo -> this", this);
}

foo();

/**
 * Contextul unui method object
 */

const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this);
  },
};

user.showTag();

/**
 * Contextul metodei unui obiect, dar declarată ca o funcție externă.
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
 * Apel fără context, dar declarat ca metodă a unui obiect.
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
 * Contextul în funcțiile callback
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
