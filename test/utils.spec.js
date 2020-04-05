import {
  orderAlphabetically,
  filterByType,
  searchByName,
} from '../src/utils.js';

import {
  calculateDps,
  getAttackInfo,
} from '../src/pokemon-functions.js';

const dummyPokemonList = [
  {
    num: 1,
    name: 'bulbasaur',
    type: 'grass',
  },
  {
    num: 5,
    name: 'charmeleon',
    type: 'fire',
  },
  {
    num: 10,
    name: 'caterpie',
    type: 'bug',
  },
];

const pokemonListAsc = [
  {
    num: 1,
    name: 'bulbasaur',
    type: 'grass',
  },
  {
    num: 10,
    name: 'caterpie',
    type: 'bug',
  },
  {
    num: 5,
    name: 'charmeleon',
    type: 'fire',
  },
];

const pokemonListDesc = [
  {
    num: 5,
    name: 'charmeleon',
    type: 'fire',
  },
  {
    num: 10,
    name: 'caterpie',
    type: 'bug',
  },
  {
    num: 1,
    name: 'bulbasaur',
    type: 'grass',
  },
];

const testSameLetter = [
  {
    name: 'nidoran',
    type: 'poison',
  },
  {
    name: 'nidoran',
    type: 'poison',
  },
];

const bugPokemonList = [
  {
    num: 10,
    name: 'caterpie',
    type: 'bug',
  },
];

const pokemonType = ['grass', 'poison'];

const withStab = {
  name: 'sludge bomb',
  type: 'poison',
  'base-damage': '80',
  energy: '-50',
  'move-duration-seg': '2.3',
};

const withoutStab = {
  name: 'sludge bomb',
  type: 'electric',
  'base-damage': '80',
  energy: '-50',
  'move-duration-seg': '2.3',
};

const pokemon = {
  type: ['grass', 'poison'],
  'special-attack': [
    {
      name: 'sludge bomb',
      type: 'poison',
      'base-damage': '80',
      energy: '-50',
      'move-duration-seg': '2.3',
    },
  ],
};

describe('orderAlphabetically', () => {
  it('is a function', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });

  it('returns an array of objects ordered alphabetically in ascending order', () => {
    expect(orderAlphabetically(dummyPokemonList, 'ascending')).toEqual(pokemonListAsc);
  });

  it('returns an array of objects ordered alphabetically in descending order', () => {
    expect(orderAlphabetically(dummyPokemonList, 'descending')).toEqual(pokemonListDesc);
  });

  it('returns an array of objects ordered alphabetically in ascending order unchanged', () => {
    expect(orderAlphabetically(testSameLetter, 'ascending')).toEqual(testSameLetter);
  });

  it('returns an array of objects ordered alphabetically in descending order unchanged', () => {
    expect(orderAlphabetically(testSameLetter, 'descending')).toEqual(testSameLetter);
  });
});

describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('returns an array of objects containing only the pokemon with the chosen type', () => {
    expect(filterByType(dummyPokemonList, 'bug')).toEqual(bugPokemonList);
  });
});

describe('searchByName', () => {
  it('is a function', () => {
    expect(typeof searchByName).toBe('function');
  });

  it('returns an array of objects containing only the pokemon with the chosen name', () => {
    expect(searchByName(dummyPokemonList, 'caterpie')).toEqual(bugPokemonList);
  });
});

describe('calculateDps', () => {
  it('is a function', () => {
    expect(typeof calculateDps).toBe('function');
  });

  it('returns an number that represents DPS per attack if STAB applies', () => {
    expect(calculateDps(withStab, pokemonType)).toEqual(42);
  });

  it('returns an number that represents DPS per attack if STAB does not apply', () => {
    expect(calculateDps(withoutStab, pokemonType)).toEqual(35);
  });
});

describe('getAttackInfo', () => {
  it('is a function', () => {
    expect(typeof getAttackInfo).toBe('function');
  });

  it('returns an array of objects containing the name, dps and eps per pokemon', () => {
    expect(getAttackInfo(pokemon)).toEqual([{ name: 'sludge bomb', dps: 42, eps: -4 }]);
  });
});
