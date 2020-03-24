export const byType = (arr, type) => arr.filter(obj => obj.type.includes(type));

export const byAlphabeticalOrder = (arr, condition) => {
  // changes the array inplace
  if (condition === 'ascending') {
    // inside function to compare letters; doesn't contemplate same letter comparison
    arr.sort((a, b) => ((a.name < b.name) ? -1 : 1));
  } else {
    arr.sort((a, b) => ((a.name > b.name) ? -1 : 1));
  }
  return arr;
};

export const byName = (arr, name) => arr.filter(obj => obj.name.includes(name));
