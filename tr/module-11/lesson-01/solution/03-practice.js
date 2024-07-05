/**
 * https://pokeapi.co/ kullanarak Pokemonların izlenebileceği bir sayfa oluşturacağız
 */
function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`).then(response => response.json());
}
const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', onSearch);
function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  fetchPokemon(searchQuery).then(renderPokemonCard).catch(onFetchError).finally(form.reset);
}
function renderPokemonCard({name, sprites, weight, height, abilities}) {
  const abilityListItems = abilities.map(ability => `<li class="list-group-item">${ ability.name }</li>`).join('');
  const markup = `<div class="card">
   <div class="card-img-top">
     <img src="${ sprites.front_default }" alt="${ name }">
   </div>
   <div class="card-body">
     <h2 class="card-title">İsim: ${ name }</h2>
     <p class="card-text">Ağırlık: ${ weight }</p>
     <p class="card-text">Büyüme: ${ height }</p>

     <p class="card-text"><b>Yetenek</b></p>
     <ul class="list-group">${ abilityListItems }</ul>
   </div>
</div>`;
  cardContainer.innerHTML = markup;
}
function onFetchError(error) {
  alert('Üzgünüz, bir hata oluştu ve Pokemonunuzu bulamadık!');
}