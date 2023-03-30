const { Sequelize, Model, DataTypes } = require('sequelize');

const USER_TABLE = 'users';

const userSchema = {
  email: {
    type: DataTypes.STRING,
    allownull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
};
