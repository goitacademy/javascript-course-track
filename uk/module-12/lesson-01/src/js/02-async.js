import axios from 'axios';
import '../css/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Синтаксис async/await
 * try...catch
 */

const fetchTodos = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.data;
    });
};

fetchTodos()
  .then(data => console.log('Todos:', data))
  .catch(error => console.error('Помилка отримання Todos:', error));
