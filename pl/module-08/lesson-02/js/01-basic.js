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

/**
 * Głęboka destrukturyzacja obiektu
 */

const { skills } = user;

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

/**
 * Destrukturyzacja tablicy
 */

const arr = [1, 2, 3, 4, 5];
