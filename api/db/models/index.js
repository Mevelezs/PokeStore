const { ExampleTwo, ExampleSchema } = require('./modelsConfig/example.Model');

function setupModels(sequelize) {
  ExampleTwo.init(ExampleSchema, ExampleTwo.config(sequelize));
}

module.exports = setupModels;
