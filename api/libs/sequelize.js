const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');
const config = require('../config/config');

const URI = config.Url;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

setupModels(sequelize);

module.exports = sequelize;
