import {STRING} from 'sequelize';
import db from '../_db';

export default db.define('admin', {
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  githubUsername: {
    type: STRING
  }
});