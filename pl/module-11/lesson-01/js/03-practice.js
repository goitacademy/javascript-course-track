/**
 * Za pomocą https://pokeapi.co/ tworzymy stronę podglądu Pokémonów.
 */

function fetchPokemon(pokemonId) {}

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");

function renderPokemonCard({ name, sprites, weight, height, abilities }) {
  const abilityListItems = abilities
    .map((ability) => `<li class="list-group-item">${ability.name}</li>`)
    .join("");

  const markup = `<div class="card">
   <div class="card-img-top">
     <img src="${sprites.front_default}" alt="${name}">
   </div>
   <div class="card-body">
     <h2 class="card-title">Imię: ${name}</h2>
     <p class="card-text">Waga: ${weight}</p>
     <p class="card-text">Wzrost: ${height}</p>

     <p class="card-text"><b>Umiejętności</b></p>
     <ul class="list-group">${abilityListItems}</ul>
   </div>
</div>`;
  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert("Ups, coś poszło nie tak i nie udało nam się znaleźć Twojego Pokémona!");
}
