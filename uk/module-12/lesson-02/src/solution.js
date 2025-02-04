import axios from 'axios';
import './common.css';

const API_KEY = 'YOUR_NEWSAPI_KEY'; // Встав свій API-ключ
const BASE_URL = 'https://newsapi.org/v2/everything';

const searchForm = document.querySelector('.search-form');
const articlesContainer = document.querySelector('.articles');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.getElementById('loader');

let searchQuery = ''; // Поточний запит
let page = 1; // Номер сторінки
const pageSize = 5; // Кількість статей на сторінку

// Функція отримання статей через Axios
async function fetchArticles(query, page) {
  try {
    loader.classList.remove('hidden'); // Показуємо лоадер

    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        language: 'en',
        pageSize: pageSize,
        page: page,
        apiKey: API_KEY,
      },
    });

    loader.classList.add('hidden'); // Ховаємо лоадер
    return response.data.articles;
  } catch (error) {
    loader.classList.add('hidden'); // Ховаємо лоадер у разі помилки
    console.error('Помилка:', error);
    alert('Помилка отримання статей. Перевірте API ключ або спробуйте ще раз.');
    return [];
  }
}

// Функція рендеру статей
function renderArticles(articles) {
  if (!articles || articles.length === 0) {
    alert('Нічого не знайдено!');
    return;
  }

  const markup = articles
    .map(
      ({ url, urlToImage, title, author, description }) => `
        <li>
            <a href="${url}" target="_blank" rel="noopener noreferrer">
                <article>
                    <img src="${
                      urlToImage || 'https://via.placeholder.com/480'
                    }" alt="" width="480">
                    <h2>${title}</h2>
                    <p>Posted by: ${author || 'Unknown'}</p>
                    <p>${description || 'No description available.'}</p>
                </article>
            </a>
        </li>
    `
    )
    .join('');

  articlesContainer.insertAdjacentHTML('beforeend', markup);
  loadMoreBtn.classList.remove('hidden'); // Показуємо кнопку "Load More"
}

// Обробка пошуку
searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  searchQuery = e.currentTarget.elements.query.value.trim();
  if (searchQuery === '') return;

  articlesContainer.innerHTML = ''; // Очищаємо попередні результати
  page = 1; // Скидаємо сторінку

  const articles = await fetchArticles(searchQuery, page);
  renderArticles(articles);
});

// Обробка натискання "Load More"
loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  const articles = await fetchArticles(searchQuery, page);
  renderArticles(articles);
});
