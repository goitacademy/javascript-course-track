/**
 * Sorgunun Temelleri
 * - Fetch API
 * - URL sorgusu
 * - Network sekmesi
 * - Yanıtın işlenmesi (response) (fetch ile 404)
 *
 * https://jsonplaceholder.typicode.com/
 */
const list = document.querySelector('.todo-list');
fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}).then(data => {
    console.log(data);    // DOM'da öğeleri oluşturma (map ve insertAdjacentHTML)
}).catch(error => {
    console.log(error);
});
/**
 * Fonksiyon içinde istek, dışında işleme
 */
const fetchTodos = () => {
};    // fetchTodos().then().catch()
