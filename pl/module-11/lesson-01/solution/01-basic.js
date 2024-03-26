/**
 * Podstawy zapytań
 * - Fetch API
 * - Żądanie URL
 * - Zakładka Network
 * - Przetwarzanie odpowiedzi response (404 з fetch)
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
    // Renderowanie elementów w DOM (map і insertAdjacentHTML)
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * Żądanie wewnątrz funkcji, przetwarzanie na zewnątrz
 */
const fetchTodos = () => {};

// fetchTodos().then().catch()
