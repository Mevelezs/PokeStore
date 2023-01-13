const axios = require('axios');
const { models } = require('../libs/sequelize');

class Pokemon {
  constructor() {
    this.pokemons = [];
    this.generate();
  }

  async generate() {
    for (let i = 1; i < 400; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => {
          const stock = 5;
          const objPokes = {
            id: response.data.id,
            name: response.data.name,
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            stock,
            defense: response.data.stats[2].base_stat,
            // type: response.data.types.map((e) => e.type.name),
            image: response.data.sprites.other['official-artwork'].front_default,
          };
          this.pokemons.push(objPokes);
        });
    }
    await models.Pokemons.bulkCreate(this.pokemons);
  }

  async getAllPokemon() {
    return this.pokemons;
  }

  getPokemonByName(name) {
    const pokemon = this.pokemons.filter((p) => p.pokeName.includes(name));
    if (!pokemon) return 'pokemon no found';
    return pokemon;
  }

  async getPokemonById(id) {
    const pokemon = this.pokemons.filter((p) => p.id.toString() === id);
    console.log(pokemon);
    if (!pokemon) return ({ message: 'pokemon not found' });
    console.log(pokemon);
    return pokemon;
  }

  createPokemon(data) {
    const pokemon = this.getPokemonById(data.id);
    if (!pokemon.message) {
      this.pokemons.push(data);
      return ({ message: 'the pokemon has been created' });
    }
    return ({ message: 'the pokemon already exists', pokemon });
  }

  updatePokemon(id, changes) {
    const pokemon = this.getPokemonById(id);
    if (pokemon.message) return ({ message: 'the pokemon does not exist' });

    const index = this.pokemons.findIndex((p) => p.id === id);

    this.pokemons[index] = {
      ...pokemon,
      ...changes,
    };
    return ({ message: 'datas changed', pokemon: this.pokemons[index] });
  }

  deletePokemon(id) {
    const pokemon = this.getPokemonById(id);
    if (!pokemon.message) {
      const index = this.pokemons.findIndex((p) => p.id === id);
      this.pokemons.splice(index, 1);
      return ({ message: 'The pokemon has benn deleted' });
    }
    return ({ message: 'Pokemon not found' });
  }
}

module.exports = Pokemon;
