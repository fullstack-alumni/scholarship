import Sequelize from 'sequelize';

const {
  DB_NAME, DB_USER, DB_PASS, DB_PORT, DB_HOST
} = process.env;

export default new Sequelize(
  DB_NAME || 'scholarship', DB_USER || '', DB_PASS || '',
  {
    dialect: 'postgres',
    port: DB_PORT || 5432,
    host: DB_HOST || 'localhost',
    logging: false
  }
);