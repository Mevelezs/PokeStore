/* eslint-disable strict */

'use strict';

const { POKEMONS_TABLE, PokemonSchema } = require('../models/modelsConfig/pokemonsModel');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(POKEMONS_TABLE, 'image', PokemonSchema.image);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(POKEMONS_TABLE, 'image');
  },
};
