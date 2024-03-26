/**
 * Destrukturyzacja obiektu
 */

const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

const { username, skills } = user;

console.log("name", username);
console.log("skills", skills);

/**
 * Głęboka destrukturyzacja obiektu
 */

const {
  skills: { html, css, js },
} = user;

console.log("html", html);
console.log("css", css);
console.log("js", js);

/**
 * Destrukturyzacja tablicy
 */

const arr = [1, 2, 3, 4, 5];

// const first = arr[0];
// const second = arr[1];
// console.log(second);

// const [first, , second, , third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);
