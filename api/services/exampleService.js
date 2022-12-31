/* eslint-disable class-methods-use-this */
const getConnection = require('../libs/postgres');
const { models } = require('../libs/sequelize');

class ExampleService {
  async getExample() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM example');
    return rta;
  }

  async getExampleSequelize() {
    const data = await models.ExampleTwo.findAll();
    return data;
  }
}

module.exports = ExampleService;
