/**
 * Destrukturyzacja obiektu w parametrach funkcji
 */

const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Bez destrukturyzacji
function getUserName(obj) {
  console.log(
    `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
  );
}

// Z destrukturyzacją
function getUserName({ name, skills: { html, css, js } } = {}) {
  console.log(
    `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
  );
}

getUserName(user);
