/* eslint-disable strict */

'use strict';

const {POKEMONS_TABLE, PokemonSchema} = require('../models/modelsConfig/pokemonsModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(POKEMONS_TABLE, PokemonSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(POKEMONS_TABLE);
  },
};
