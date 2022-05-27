require('dotenv/config');

const {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  DB_DIALECT,
} = process.env;

module.exports = {
  database: DB_DATABASE,
  host: DB_HOST,
  password: DB_PASSWORD,
  username: DB_USERNAME,
  port: DB_PORT,
  dialect: DB_DIALECT,
};
