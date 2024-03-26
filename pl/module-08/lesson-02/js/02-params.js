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

getUserName(user);
