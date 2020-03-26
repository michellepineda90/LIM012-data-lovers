import {
  byAlphabeticalOrder,
  byType,
  byName,
} from '../src/utils.js';

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

const bugPokemonList = [
  {
    num: 10,
    name: 'caterpie',
    type: 'bug',
  },
];

describe('byAlphabeticalOrder', () => {
  it('is a function', () => {
    expect(typeof byAlphabeticalOrder).toBe('function');
  });

  it('returns an array of objects ordered alphabetically in ascending order', () => {
    expect(byAlphabeticalOrder(dummyPokemonList, 'ascending')).toEqual(pokemonListAsc);
  });

  it('returns an array of objects ordered alphabetically in descending order', () => {
    expect(byAlphabeticalOrder(dummyPokemonList, 'descending')).toEqual(pokemonListDesc);
  });
});

describe('byType', () => {
  it('is a function', () => {
    expect(typeof byType).toBe('function');
  });

  it('returns an array of objects containing only the pokemon with the chosen type', () => {
    expect(byType(dummyPokemonList, 'bug')).toEqual(bugPokemonList);
  });
});

describe('byName', () => {
  it('is a function', () => {
    expect(typeof byName).toBe('function');
  });

  it('returns an array of objects containing only the pokemon with the chosen name', () => {
    expect(byName(dummyPokemonList, 'caterpie')).toEqual(bugPokemonList);
  });
});
