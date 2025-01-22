import axios from 'axios';
import '../common.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 *
 * 2) В інтерфейсі є форма пошуку з прив'язаним дропдауном з завантаженими breeds.
 *
 * 3) Користувач в формі вводить або обирає необхідний breed і при сабміті форми
 *  виконується GET запит за зображенням.
 *
 * 4) Після запиту під формою відображається картка з зображенням.
 *
 * 5) Під час запиту під формую відображається loader
 */

document.addEventListener('DOMContentLoaded', function () {
  const breedInput = document.getElementById('breed-input');
  const breedsList = document.getElementById('breeds-list');
  const form = document.getElementById('search-form');
  const loader = document.getElementById('loader');
  const catCard = document.getElementById('cat-card');

  // Отримання списку порід через Axios
  function fetchBreeds() {
    axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then(response => {
        populateDatalist(response.data);
      })
      .catch(error => console.error('Помилка завантаження порід:', error));
  }

  // Заповнення `datalist`
  function populateDatalist(breeds) {
    breedsList.innerHTML = '';
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.name;
      option.dataset.id = breed.id;
      breedsList.appendChild(option);
    });
  }

  // Виконати запит при сабміті форми
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const selectedBreed = Array.from(breedsList.options).find(
      opt => opt.value === breedInput.value
    );
    if (!selectedBreed) {
      alert('Оберіть існуючу породу!');
      return;
    }

    const breedId = selectedBreed.dataset.id;
    loader.classList.remove('d-none');
    catCard.innerHTML = '';

    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => {
        loader.classList.add('d-none');

        if (response.data.length > 0) {
          const catImage = response.data[0].url;
          catCard.innerHTML = `
                        <div class="card mx-auto" style="max-width: 400px;">
                            <img src="${catImage}" class="card-img-top" alt="${breedInput.value}">
                            <div class="card-body">
                                <h5 class="card-title text-center">${breedInput.value}</h5>
                            </div>
                        </div>`;
        } else {
          catCard.innerHTML = `<p class="text-center text-danger mt-3">Зображення не знайдено.</p>`;
        }
      })
      .catch(error => {
        loader.classList.add('d-none');
        console.error('Помилка завантаження зображення:', error);
      });
  });

  // Завантаження списку порід при завантаженні сторінки
  fetchBreeds();
});
