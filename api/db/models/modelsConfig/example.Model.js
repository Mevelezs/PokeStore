const { Model, DataTypes } = require('sequelize');

const EXAMPLE_TABLE = 'example_two';

const ExampleSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name',
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

class ExampleTwo extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: EXAMPLE_TABLE,
      modelName: 'ExampleTwo',
      timestamps: false,
    };
  }
}

module.exports = {
  EXAMPLE_TABLE,
  ExampleSchema,
  ExampleTwo,
};
