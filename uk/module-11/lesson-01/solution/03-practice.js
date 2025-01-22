/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 */

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    (response) => response.json()
  );
}

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value.toLowerCase();

  fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(form.reset);
}

function renderPokemonCard({ name, sprites, weight, height, abilities }) {
  const abilityListItems = abilities
    .map((item) => `<li class="list-group-item">${item.ability.name}</li>`)
    .join("");

  const markup = `<div class="card shadow-lg border-0 text-center">
  <img src="${sprites.front_default}" class="card-img bg-light p-3" alt="${name}" >

  <div class="card-body">
    <h2 class="fw-bold text-primary">${name}</h2>
    <p><span class="fw-bold">Вага:</span> ${weight}</p>
    <p><span class="fw-bold">Зростання:</span> ${height}</p>
    <h5 class="mt-3">Уміння</h5>
    <ul class="list-group list-group-flush">${abilityListItems}</ul>
  </div>
</div>`;

  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert("Упс, щось пішло не так і ми не знайшли вашого покемона!");
}
