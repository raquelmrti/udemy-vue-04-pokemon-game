const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));

  // We don't care about the first argument, so we use "_"
  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonsOptions = () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  getPokemonNames(mixedPokemons.splice(0, 4));
};

// Destructuring first argument
const getPokemonNames = ([a, b, c, d] = []) => {
  console.log(a, b, c, d);
};

export default getPokemonsOptions;
