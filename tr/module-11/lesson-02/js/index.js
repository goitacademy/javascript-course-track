/**
 * https://mockapi.io/ servisini backend oluşturmak için kullanıyoruz
 */
/**
 * Read (GET)
 */
function fetchBooks() {
}
function fetchBookById(bookId) {
}
fetchBooks();
fetchBookById(2);
fetchBookById(4);
/**
 * Create (POST)
 */
function addBook(book) {
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
}
// updateBookById({ title: "NODEJS için Büyük Yeni Kitap" }, 19);
// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: "Mango" }, 17);
/**
 * Delete (DELETE)
 */
function removeBook(bookId) {
}  // removeBook(15);
   // removeBook(14);
