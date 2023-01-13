const { ExampleTwo, ExampleSchema } = require('./modelsConfig/example.Model');
const { Pokemons, PokemonSchema } = require('./modelsConfig/pokemonsModel');

function setupModels(sequelize) {
  ExampleTwo.init(ExampleSchema, ExampleTwo.config(sequelize));
  Pokemons.init(PokemonSchema, Pokemons.config(sequelize));
}

module.exports = setupModels;
