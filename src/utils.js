export const filterByType = (arr, type) => arr.filter(obj => obj.type.includes(type));

export const orderAlphabetically = (arr, condition) => {
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

export const searchByName = (arr, name) => arr.filter(obj => obj.name.includes(name));

export const calculateDPS = (pokemon) => {

  const damageByAttack = pokemon.map((dps) => {
    damageByAttack = parseFloat(dps);
    const baseDamage = elem['base-damage'];
    const moveSeg = elem['move-duration-seg'];
    return (baseDamage * 1.25) / moveSeg;
    
  });

  console.log(damageByAttack);
  
  const totalDps = damageByAttack.reduce((dps, dps1) => dps + dps1);
  const promTotalDps = (totalDps / damageByAttack.length).toFixed(1);
  return promTotalDps;
};