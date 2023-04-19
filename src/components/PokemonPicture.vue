<template>
  <div class="pokemon-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      class="fade-in" alt="Pokémon">

    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      class="hidden-pokemon" alt="Pokémon">
  </div>
</template>

<script>
export default {
  name: 'PokemonPicture'

}
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
}

img {
  height: 200px;
  position: absolute;
  width: 100vw;
  right: 0;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>