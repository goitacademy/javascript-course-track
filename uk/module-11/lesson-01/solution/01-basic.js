/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

const list = document.querySelector(".todo-list");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Рендер елементів в DOM (map і insertAdjacentHTML)
  })
  .catch((error) => {
    console.log(error);
  });
