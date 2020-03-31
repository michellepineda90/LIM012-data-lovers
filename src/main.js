import data from './data/pokemon/pokemon.js';

import {
  filterByType,
  orderAlphabetically,
  searchByName,
} from './utils.js';


const mainContainer = document.querySelector('.stack');

// const evolutionsArray = pokemon['next-evolution'];
// const weaknessesArray = pokemon.weaknesses;

const showMorePokemonInfo = pokemon => () => {
  const modalBlock = document.createElement('div');
  modalBlock.classList.add('modal-block');
  modalBlock.innerHTML = `
  <div class="modal-section">
    <span id="close" class="close">x</span>
    <section class="modal-pokemon">
      <div class="box">
        <div class="modal-pokemon-image">
          <img src="${pokemon.img}" class="pokemon-big-image">
        </div>
        <div class="modal-pokemon-name">
          <h1 class="pokemon-big-name">${pokemon.name}</h1>
        </div>
      </div>
    </section>
    <section class="modal-stats">
      <div class="block-1">
        <div class="modal-resistance">
          <p class="resistance-tag">RESISTANCE</p>
        </div>
        <div class="resistance-detail">
          <p>${pokemon.resistant}</p>
          <img class="type-image">
        </div>
      </div>
      <div class="block-2">
        <div class="modal-weakness">
          <p class="weakness-tag">WEAKNESSES</p>
        </div>
        <div class="weakness-detail">
          <p>${pokemon.weaknesses}</p>
          <img class="type-image">
        </div>
      </div>
    </section>
    <section class="modal-movesets"></section>
  </div>
  `;
  mainContainer.appendChild(modalBlock);
};

const showPokemon = (pokemonList) => {
  pokemonList.forEach((pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    pokemonCard.innerHTML = `
        <p class="pokemon-number">${pokemon.num}</p>
        <div class="pokemon-image"><img src = ${pokemon.img} class="pokemon-pic" alt="pokemon picture"></div>
        <p class= "pokemon-name">${pokemon.name}</p>
        `;
    const handleClick = showMorePokemonInfo(pokemon);
    pokemonCard.addEventListener('click', handleClick);
    mainContainer.appendChild(pokemonCard);
  });
};

showPokemon(data.pokemon);

const showByType = document.querySelector('#order-by-type');

showByType.addEventListener('change', () => {
  const chosenType = showByType.value;
  mainContainer.innerHTML = '';
  showPokemon(filterByType(data.pokemon, chosenType));
  if (chosenType === 'all-types') {
    showPokemon(data.pokemon);
  }
});

const orderAlphabeticallySelect = document.querySelector('#order-alphabetically');

orderAlphabeticallySelect.addEventListener('change', () => {
  const selectedOrder = orderAlphabetically.value;
  mainContainer.innerHTML = '';
  showPokemon(orderAlphabetically(data.pokemon, selectedOrder));
});

const image = document.querySelector('.magnifying-glass');

image.addEventListener('click', (clickEvent) => {
  const domEvent = document.createEvent('Event');
  domEvent.initEvent('submit', false, true);
  clickEvent.target.closest('form').dispatchEvent(domEvent);
});

const form = document.querySelector('.search-form');

const chosenName = document.getElementById('search-by-name');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const pokemonName = chosenName.value.toLowerCase();
  mainContainer.innerHTML = '';
  showPokemon(searchByName(data.pokemon, pokemonName));
  if (!mainContainer.innerHTML) {
    mainContainer.innerHTML = `
    <div class="error-message">
      <img src="./img/error.png" alt="error icon" class="error-icon"/>
      <p>Lo sentimos, tu búsqueda no ha generado ningún resultado.</p>
    </div>
    `;
  }
});

const originalState = document.getElementById('logo-image');

originalState.addEventListener('click', () => {
  mainContainer.innerHTML = '';
  showPokemon(data.pokemon);
});
