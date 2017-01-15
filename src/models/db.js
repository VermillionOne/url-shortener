const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 30000,
  },
  logging: false,
});

const user = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
});

const url = sequelize.define('url', {
  originalUrl: {
    type: Sequelize.STRING,
  },
  shortUrl: {
    type: Sequelize.STRING,
  },
  urlName: {
    type: Sequelize.STRING,
  },
});

user.hasMany(url, {
  foreignKey: 'userID',
});

sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
exports.url = url;
