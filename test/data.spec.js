import {
  byAlphabeticalOrder,
  byType,
  byName,
} from '../src/data.js';

const test = [
  {
    num: 1,
    name: 'bulbasaur',
  },
  {
    num: 5,
    name: 'charmeleon',
  },
  {
    num: 10,
    name: 'caterpie',
  },
];

const firstOrderTest = [
  {
    num: 1,
    name: 'bulbasaur',
  },
  {
    num: 10,
    name: 'caterpie',
  },
  {
    num: 5,
    name: 'charmeleon',
  },
];

const secondOrderTest = [
  {
    num: 5,
    name: 'charmeleon',
  },
  {
    num: 10,
    name: 'caterpie',
  },
  {
    num: 1,
    name: 'bulbasaur',
  },
];

const typeTest = [
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

const typeResult = [
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
    expect(byAlphabeticalOrder(test, 'ascending')).toEqual(firstOrderTest);
  });

  it('returns an array of objects ordered alphabetically in descending order', () => {
    expect(byAlphabeticalOrder(test, 'descending')).toEqual(secondOrderTest);
  });
});

describe('byType', () => {
  it('is a function', () => {
    expect(typeof byType).toBe('function');
  });

  it('returns an array of objects containing only the pokemon with the chosen type', () => {
    expect(byType(typeTest, 'bug')).toEqual(typeResult);
  });
});

describe('byName', () => {
  it('is a function', () => {
    expect(typeof byName).toBe('function');
  });

  it('returns an array of objects containing only the pokemon with the chosen name', () => {
    expect(byName(typeTest, 'caterpie')).toEqual(typeResult);
  });
});
