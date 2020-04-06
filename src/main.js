import data from './data/pokemon/pokemon.js';

import {
  getAttackInfo,
} from './utils/pokemonUtils.js';

import {
  filterByType,
  orderAlphabetically,
  searchByName,
} from './utils/arrays.js';

const mainContainer = document.querySelector('.stack');

const renderResistanceWeaknesses = (pokemon) => {
  let resistanceAndWeaknesses = '';
  let resistanceList = '';
  let weaknessesList = '';

  pokemon.resistant.forEach((elemResistance) => {
    resistanceList += `<img class="resist-weak-img" src="./img/types-pokemon/${elemResistance}.png"/>`;
  });
  pokemon.weaknesses.forEach((elemWeaknesses) => {
    weaknessesList += `<img class="resist-weak-img" src="./img/types-pokemon/${elemWeaknesses}.png"/>`;
  });
  resistanceAndWeaknesses += `
    <div class="res-weak">
      <p class="modal-resistance">RESISTANCE</p>
      <div class="rectangle">${resistanceList}</div>
    </div>
    <div class="res-weak">
      <p class="modal-weakness">WEAKNESSES</p>
      <div class="rectangle">${weaknessesList}</div>
    </div>
  `;
  return resistanceAndWeaknesses;
};

const renderMovesetsTable = (pokemon) => {
  let body = '';
  const headers = `
      <tr>
        <th>SPECIAL ATTACK</th>
        <th>DPS</th>
        <th>EPS</th>
      </tr>
  `;
  const attacks = getAttackInfo(pokemon);
  attacks.forEach((attack) => {
    body += `
      <tr>
        <td>${attack.name.toUpperCase()}</td>
        <td>${attack.dps}</td>
        <td>${attack.eps}</td>
      </tr>
    `;
  });
  const movesetTable = `
    <table>  
      ${headers}
      ${body}
    </table>
  `;
  return movesetTable;
};

const showMorePokemonInfo = pokemon => () => {
  const modalBlock = document.createElement('div');
  modalBlock.classList.add('modal-block');
  modalBlock.innerHTML = `
    <div id="modal-section" class="modal-section ocultar mostrar">
      <a class="closePopup" href="#"><span id="close" class="close">x</span></a>
      <section class="modal-pokemon">
        <img src="${pokemon.img}" class="pokemon-big-image">
        <h1>${pokemon.name}</h1>
        <h2>${pokemon.about}</h2>
      </section>
      <section class="modal-stats">
        ${renderResistanceWeaknesses(pokemon)}
      </section>
      <section class="modal-movesets">
        ${renderMovesetsTable(pokemon)}
      </section>
    </div>
  `;
  mainContainer.appendChild(modalBlock);

  const buttonExit = document.getElementById('close');
  if (buttonExit != null) {
    buttonExit.addEventListener('click', () => {
      modalBlock.classList.add('hide');
      modalBlock.innerHTML = '';
    });
  }
};

const showPokemon = (pokemonList) => {
  mainContainer.innerHTML = '';
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
  showPokemon(filterByType(data.pokemon, chosenType));
  if (chosenType === 'all-types') {
    showPokemon(data.pokemon);
  }
});

const orderAlphabeticallySelect = document.querySelector('#order-alphabetically');

orderAlphabeticallySelect.addEventListener('change', () => {
  const selectedOrder = orderAlphabetically.value;
  showPokemon(orderAlphabetically(data.pokemon, selectedOrder));
});

const image = document.querySelector('.magnifying-glass');

image.addEventListener('click', (clickEvent) => {
  const domEvent = document.createEvent('Event');
  domEvent.initEvent('submit', false, true);
  clickEvent.target.closest('form').dispatchEvent(domEvent);
});

const search = document.querySelector('.search-form');

const chosenName = document.getElementById('search-by-name');

search.addEventListener('submit', (event) => {
  event.preventDefault();
  const pokemonName = chosenName.value.toLowerCase();
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