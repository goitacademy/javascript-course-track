/**
 * Destrukturyzuj obiekt w taki sposób, aby uzyskać wartości name, surname, username
 */

const user = {
  id: 1,
  username: "harry_potter",
  profile: {
    name: "Harry",
    surname: "Potter",
    age: 25,
  },
};

// Destrukturyzacja obiektu w celu uzyskania poszczególnych zmiennych
const {
  username,
  profile: { name, surname },
} = user;

// Wyświetlenie wartości wynikowych
console.log(`Imię użytkownika: ${name}`);
console.log(`Nazwisko użytkownika: ${surname}`);
console.log(`Imię użytkownika (pseudonim): ${username}`);
