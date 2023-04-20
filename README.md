# Pokémon game with Vue // Fernando Herrera Udemy Course

This is the second project in Fernando Herrera's Udemy Course, [Vue.js: De cero a experto](https://www.udemy.com/course/vuejs-fh/). It's a little game where the user is presented with a silhouette of a Pokémon and must correctly guess its name out of four options

Here I will track my progress through it and possibly add some notes.

### **19/04/2023:**

- Set up the structure of the project: one page component - `PokemonPage` - that contains two components - `PokemonPicture` and `PokemonOptions`

### **20/04/2023:**

- Finished the `PokemonPicture` component.
- Made the `getPokemonOptions.js` helper which contains a few functions needed to fetch the 4 Pokémons and their names.
- Finished all the logic for `getPokemonOptions`. Basically we start an array with 650 positions, map through it to fill all the positions with their index value, sort it randomly, pass the first four numbers to a function that makes an API call to fetch the Pokémon whose IDs match the numbers, and return their names and IDs in an object.
- Made `PokemonOptions` render the list of four Pokémon names.
