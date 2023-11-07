const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

exports.User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10000,
    },
});
