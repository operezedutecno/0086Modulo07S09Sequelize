const { Sequelize } = require("sequelize");

const conexion = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'clase_orm',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres'
});

module.exports = conexion;