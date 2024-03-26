/**
 * Destrukturyzacja obiektu w cyklu
 */

const users = [
  {
    name: "Kate",
  },
  {
    name: "Alex",
  },
  {
    name: "Mark",
  },
];

/**
 * Bez destrukturyzacji
 */
const names = [];

for (const user of users) {
  names.push(user.name);
}

console.log(names);

/**
 * Z destrukturyzacją
 */
