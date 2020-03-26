export const byType = (arr, type) => arr.filter(obj => obj.type.includes(type));

export const byAlphabeticalOrder = (arr, condition) => {
  const newArr = arr.slice();
  newArr.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  if (condition === 'descending') {
    newArr.reverse();
  }
  return newArr;
};

export const byName = (arr, name) => arr.filter(obj => obj.name.includes(name));
