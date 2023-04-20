<template>
  <h1 v-if='!pokemon'>Please wait...</h1>
  <div v-else>
    <h1>Who is this Pokémon?</h1>
    <PokemonPicture :pokemonId='pokemon.id' :showPokemon='showPokemon' />
    <PokemonOptions :pokemons='pokemonArr' @selection='checkAnswer' />
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor(Math.random() * 4)
      // Select one Pokemon from the pokemonArr randomly, this will be the correct answer
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(pokeId) {
      this.showPokemon = true
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>