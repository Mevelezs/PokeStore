const { Sequelize, Model, DataTypes } = require('sequelize');

const POKEMONS_TABLE = 'pokemons_table';

const PokemonSchema = {
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
  hp: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  attack: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  defense: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  image: {
    type: DataTypes.STRING,
    allownull: true,
  },
  createdInDb: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'create_in_db',
  },
  createAt: {
    field: 'crete_at',
    type: DataTypes.DATE,
    allownull: false,
    defaultValue: Sequelize.NOW,
  },
};

class Pokemons extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: POKEMONS_TABLE,
      modelsName: 'Pokemons',
      timestamps: false,
    };
  }
}
module.exports = {
  POKEMONS_TABLE,
  PokemonSchema,
  Pokemons,
};
