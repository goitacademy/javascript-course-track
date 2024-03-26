/**
 * Przepisujemy na async/await
 * Używamy biblioteki https://axios-http.com/
 *
 * Używamy dla backendu usługi https://mockapi.io/
 */

/**
 * Read (GET)
 */

function fetchBooks() {
  return fetch("/books").then((res) => res.json());
}

function fetchBookById(bookId) {
  return fetch(`/books/${bookId}`).then((res) => res.json());
}

fetchBooks();
fetchBookById(2);
fetchBookById(4);

/**
 * Create (POST)
 */

function addBook(book) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then((res) => res.json());
}

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

function updateBookById(update, bookId) {
  const options = {
    метод: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };

  return fetch(`/books/${bookId}`, options).then((res) => res.json());
}

// updateBookById({ title: "Wspaniała nowa książka o NODEJS" }, 19);
// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: "Mango" }, 17);

/**
 * Delete (DELETE)
 */

function removeBook(bookId) {
  const options = {
    method: "DELETE",
  };

  return fetch(`/books/${bookId}`, options).then((res) => res.json());
}

// removeBook(15);
// removeBook(14);
