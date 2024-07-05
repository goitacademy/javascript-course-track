/**
 * https://mockapi.io/ servisini backend oluşturmak için kullanıyoruz
 */
/**
 * Read (GET)
 */
function fetchBooks() {
  return fetch('/books').then(res => res.json());
}
function fetchBookById(bookId) {
  return fetch(`/books/${ bookId }`).then(res => res.json());
}
fetchBooks();
fetchBookById(2);
fetchBookById(4);
/**
 * Create (POST)
 */
function addBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  };
  return fetch(`${ BASE_URL }/books`, options).then(res => res.json());
}
addBook({
  title: 'CSS ile ilgili test kitabı',
  author: 'Ben',
  genres: ['CSS'],
  Rating: 9
}).then(book => {
  console.log('Arka uçtan gelen yanıtla çizime başlanabilir');
  console.log(book);
}).catch(error => console.log(error));
addBook({
  title: 'HTML ile ilgili test kitabı',
  author: 'Ben',
  genres: ['HTML'],
  Rating: 7
}).then(book => {
  console.log('Arka uçtan gelen yanıtla çizime başlanabilir');
  console.log(book);
});
/**
 * Update (PUT/PATCH)
 */
function updateBookById(update, bookId) {
  const options = {
    метод: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(update)
  };
  return fetch(`/books/${ bookId }`, options).then(res => res.json());
}
// updateBookById({ title: "NODEJS için Büyük Yeni Kitap" }, 19);
// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: "Mango" }, 17);
/**
 * Delete (DELETE)
 */
function removeBook(bookId) {
  const options = { method: 'DELETE' };
  return fetch(`/books/${ bookId }`, options).then(res => res.json());
}  // removeBook(15);
   // removeBook(14);
