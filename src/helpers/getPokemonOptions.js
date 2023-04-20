import pokemonApi from "../api/pokemonApi";

// Make array with 650 positions and fill it with their index numbers
const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));

  // We don't care about the first argument, so we use "_"
  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonsOptions = async () => {
  // Mix up the order
  const mixedPokemons = getPokemons.sort(() => Math.random() - 0.5);
  // Get only the first four Pokémon
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));

  return pokemons;
};

// Destructuring first argument
const getPokemonNames = async ([a, b, c, d] = []) => {
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];

  const [p1, p2, p3, p4] = await Promise.all(promiseArr);

  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

export default getPokemonsOptions;
