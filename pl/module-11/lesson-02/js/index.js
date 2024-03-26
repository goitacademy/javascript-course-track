/**
 * Za pomocą usługi https://mockapi.io/ tworzymy backend.
 */

/**
 * Read (GET)
 */

function fetchBooks() {}

function fetchBookById(bookId) {}

fetchBooks();
fetchBookById(2);
fetchBookById(4);

/**
 * Create (POST)
 */

function addBook(book) {}

addBook({
  title: "Książka testowa o CSS",
  author: "Ja",
  genres: ["CSS"],
  Rating: 9,
})
  .then((book) => {
    console.log("Otrzymano odpowiedź z backendu, można wyświetlać");
    console.log(book);
  })
  .catch((error) => console.log(error));

addBook({
  title: "Książka testowa o HTML",
  author: "Ja",
  genres: ["HTML"],
  Rating: 7,
}).then((book) => {
  console.log("Otrzymano odpowiedź z backendu, można wyświetlać");
  console.log(book);
});

/**
 * Update (PUT/PATCH)
 */

function updateBookById(update, bookId) {}

// updateBookById({ title: "Wspaniała nowa książka o NODEJS" }, 19);
// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: "Mango" }, 17);

/**
 * Delete (DELETE)
 */

function removeBook(bookId) {}

// removeBook(15);
// removeBook(14);
