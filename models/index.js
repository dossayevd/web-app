const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'root', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connect };
