<template>
  <h1 v-if='!pokemon'>Please wait...</h1>
  <div v-else>
    <h1>Who is this Pokémon?</h1>
    <PokemonPicture :pokemonId='pokemon.id' :showPokemon='showPokemon' />
    <PokemonOptions :pokemons='pokemonArr' @selection='checkAnswer' />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click='restartGame'>New game</button>
    </template>

  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'
import { throwStatement } from '@babel/types'

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
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    capitalizeFirstLetter(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor(Math.random() * 4)
      // Select one Pokemon from the pokemonArr randomly, this will be the correct answer
      this.pokemon = this.pokemonArr[rndInt]
    },
    restartGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    },
    checkAnswer(pokeId) {
      if (this.showAnswer) return

      this.showPokemon = true
      this.showAnswer = true

      if (pokeId === this.pokemon.id) {
        this.message = `✅ Correct, it's ${this.capitalizeFirstLetter(this.pokemon.name)}!`
      } else {
        this.message = `❌ Wrong, it's ${this.capitalizeFirstLetter(this.pokemon.name)}!`
      }
    },
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>