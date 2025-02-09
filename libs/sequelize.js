const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, { dialect: 'postgres', logging: false }); // Se crea una instancia de Sequelize, ya gestiona el pooling.

//dialect → Para indicar que BD se está usando

//logging → Cada vez que se haga una consulta con el ORM, en la consola se muestra el resultado o el igual en comando directo SQL.
setupModels(sequelize);

module.exports = sequelize;
