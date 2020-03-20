import data from './data/pokemon/pokemon.js'; 

import {
  filterByType,
} from './data.js';

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
  showPokemon(filterByType(data.pokemon, chosenType));
  console.log({chosenType});
});
