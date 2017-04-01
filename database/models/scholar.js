import {STRING, INTEGER} from 'sequelize';
import db from '../_db';

export default db.define('scholar', {
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
  rank: {
    type: INTEGER
  }
});