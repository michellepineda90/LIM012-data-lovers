import data from './data/pokemon/pokemon.js';

import {
  byType,
  byAlphabeticalOrder,
  byName,
} from './utils.js';

const mainContainer = document.querySelector('.stack');

const showPokemon = (pokemonList) => {
  pokemonList.forEach((pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    pokemonCard.innerHTML = `
        <div class="pokemon-number">${pokemon.num}</div>
        <div class="pokemon-image"><img src = ${pokemon.img} class="pokemon-pic" alt="pokemon picture"></div>
        <div class= "pokemon-name">${pokemon.name}</div>
        `;
    mainContainer.appendChild(pokemonCard);
  });
};

showPokemon(data.pokemon);

const showByType = document.querySelector('#order-by-type');

showByType.addEventListener('change', () => {
  const chosenType = showByType.value;
  mainContainer.innerHTML = '';
  showPokemon(byType(data.pokemon, chosenType));
  if (chosenType === 'all-types') {
    showPokemon(data.pokemon);
  }
});

const orderAlphabetically = document.querySelector('#order-alphabetically');

orderAlphabetically.addEventListener('change', () => {
  const selectedOrder = orderAlphabetically.value;
  mainContainer.innerHTML = '';
  showPokemon(byAlphabeticalOrder(data.pokemon, selectedOrder));
});

const searchByName = document.querySelector('#search-by-name');

searchByName.addEventListener('change', () => {
  const pokemonName = searchByName.value;
  mainContainer.innerHTML = '';
  showPokemon(byName(data.pokemon, pokemonName));
});

const originalState = document.getElementById('logo-image');

originalState.addEventListener('click', (event) => {
  event.preventDefault();
  mainContainer.innerHTML = '';
  showPokemon(data.pokemon);
});
