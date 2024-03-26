/**
 * Pobieramy klucz https://newsapi.org/
 * Zapytania będziemy wysyłać do http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 *
 * Paginacja: numer grupy i liczba elementów grupy
 * - Ładujemy artykuły po przesłaniu formularza
 * - Ładujemy artykuły po kliknięciu przycisku "Załaduj więcej"
 * - Aktualizujemy grupę w parametrach zapytania
 * - Renderujemy artykuły
 * - Resetowanie wartości podczas wyszukiwania według nowego kryterium
 * - Pokazujemy spinner podczas wykonywania zapytania
 */

const searchForm = document.querySelector(".search-form");
const articlesContainer = document.querySelector(".articles");
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

function appendArticlesMarkup(articles) {
  const markup = articles
    .map(
      ({ url, urlToImage, title, author, description }) => `
   <li>
     <a href="${url}" target="_blank" rel="noopener noreferrer">
       <article>
         <img src="${urlToImage}" alt="" width="480">
         <h2>${title}</h2>
         <p>Posted by: ${author}</p>
         <p>${description}</p>
       </article>
     </a>
   </li>`
    )
    .join("");

  articlesContainer.insertAdjacentHTML("beforeend", markup);
}
