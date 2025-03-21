const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const user = sequelize.define('user', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    money: {
        type: DataTypes.INTEGER,
        defaultValue: 0.01
    }
});

module.exports = user;