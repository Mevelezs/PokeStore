/* eslint-disable strict */

'use strict';

const { EXAMPLE_TABLE, ExampleSchema } = require('../models/modelsConfig/example.Model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(EXAMPLE_TABLE, ExampleSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(EXAMPLE_TABLE);
  },
};
