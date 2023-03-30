/* eslint-disable class-methods-use-this */
const axios = require('axios');
const { Op } = require('sequelize');
const { models } = require('../libs/sequelize');

class Pokemon {
  constructor() {
    this.pokemons = [];
  }

  async generate() {
    for (let i = 1; i < 40; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => {
          const objPokes = {
            id: response.data.id,
            url: `https://pokeapi.co/api/v2/pokemon/${i}`,
            name: response.data.name,
            height: response.data.height,
            weight: response.data.weight,
            image: response.data.sprites.other['official-artwork'].front_default,
          };
          this.pokemons.push(objPokes);
        });
    }
    await models.Pokemons.bulkCreate(this.pokemons);
  }

  async getAllPokemon() {
    const pokemons = await models.Pokemons.findAll();
    return pokemons;
  }

  async getPokemonByName(name) {
    const pokemon = await models.Pokemons.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
      },
    });
    if (!pokemon) return 'pokemon no found';
    return pokemon;
  }

  async getPokemonById(id) {
    const pokemon = await models.Pokemons.findByPk(id);
    if (!pokemon) return ({ message: 'pokemon not found' });
    return pokemon;
  }

  async createPokemon(data) {
    const pokemon = await this.getPokemonById(data.id);
    if (!pokemon.message) {
      await models.pokemons.create(data);
      return ({ message: 'the pokemon has been created' });
    }
    return ({ message: 'the pokemon already exists', pokemon });
  }

  async updatePokemon(id, changes) {
    const pokemon = await this.getPokemonById(id);
    if (pokemon.message) return ({ message: 'the pokemon does not exist' });

    // const index = this.pokemons.findIndex((p) => p.id === id);

    // this.pokemons[index] = {
    //   ...pokemon,
    //   ...changes,
    // };
    const data = await models.Pokemons.update(changes);
    return ({ message: 'datas changed', pokemon: data });
  }

  async deletePokemon(id) {
    const pokemon = await this.getPokemonById(id);
    if (!pokemon.message) {
      // const index = this.pokemons.findIndex((p) => p.id === id);
      // this.pokemons.splice(index, 1);
      await models.Pokemons.destroy(pokemon);
      return ({ message: 'The pokemon has benn deleted' });
    }
    return ({ message: 'Pokemon not found' });
  }
}

module.exports = Pokemon;
