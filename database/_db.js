import Sequelize from 'sequelize';

const {
  DB_NAME, DB_USER, DB_PASS, DB_PORT, DB_HOST
} = process.env;

export default new Sequelize(
  DB_NAME, DB_USER, DB_PASS,
  {
    dialect: 'postgres',
    port: DB_PORT,
    host: DB_HOST,
    logging: false
  }
);