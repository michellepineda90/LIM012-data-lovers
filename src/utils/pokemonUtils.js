export const calculateDps = (attack, pokemonType) => {
  let stab = 1;
  const attackType = attack.type;
  const baseDamage = attack['base-damage'];
  const moveDuration = attack['move-duration-seg'];
  if (pokemonType.includes(attackType)) {
    stab = 1.20;
  }
  const dps = Math.round((stab * baseDamage) / moveDuration);
  return dps;
};

export const calculateEps = (attack) => {
  const moveDuration = attack['move-duration-seg'];
  const energy = attack.energy;
  const eps = Math.round(energy / moveDuration);
  return eps;
};

export const getAttackInfo = (pokemon) => {
  const attacks = pokemon['special-attack'];
  const pokemonType = pokemon.type;
  const formattedAttacks = attacks.map(attack => ({
    name: attack.name,
    dps: calculateDps(attack, pokemonType),
    eps: calculateEps(attack),
  }));
  return formattedAttacks;
};
