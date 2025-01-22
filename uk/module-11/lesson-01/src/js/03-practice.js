import '../common.css';

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

function fetchPokemon(pokemonId) {}

const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');

function renderPokemonCard({ name, sprites, weight, height, abilities }) {
  const abilityListItems = abilities
    .map(item => `<li class="list-group-item">${item.ability.name}</li>`)
    .join('');

  const markup = `<div class="pokemon-card">
  <img src="${sprites.front_default}" class="pokemon-image" alt="${name}" >

  <div class="pokemon-info">
    <h2 class="pokemon-title">${name}</h2>
    <p><span class="bold-text">Вага:</span> ${weight}</p>
    <p><span class="bold-text">Зростання:</span> ${height}</p>
    <h5 class="abilities-title">Уміння</h5>
    <ul class="abilities-list">${abilityListItems}</ul>
  </div>
</div>`;

  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, щось пішло не так і ми не знайшли вашого покемона!');
}
