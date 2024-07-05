/**
 * Anahtarı alın https://newsapi.org/
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1 adresine talepte bulunun
 *
 * Sayfalandırma: grup numarası ve grup elemanlarının sayısı
 * - Form gönderildiğinde makaleleri indiriyoruz
 * - "Daha fazlasını indir" düğmesine tıklayarak makaleleri indirin
 * - Sorgu parametrelerindeki grubu güncelleyin
 * - Makaleyi oluşturun
 * - Yeni bir kritere göre arama yaparken değeri sıfırlama
 * - Sorgu çalışırken döndürücüyü göster
 */
const searchForm = document.querySelector('.search-form');
const articlesContainer = document.querySelector('.articles');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
function appendArticlesMarkup(articles) {
  const markup = articles.map(({url, urlToImage, title, author, description}) => `   <li>
     <a href="${ url }" target="_blank" rel="noopener noreferrer">
       <article>
         <img src="${ urlToImage }" alt="" width="480">
         <h2>${ title }</h2>
         <p>Posted by: ${ author }</p>
         <p>${ description }</p>
       </article>
     </a>
   </li>`).join('');
  articlesContainer.insertAdjacentHTML('beforeend', markup);
}