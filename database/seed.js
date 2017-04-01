import db from './';
import {Promise} from 'sequelize'; // is bluebird

const Scholar = db.model('scholar');

const someScholars = [
  { name: 'Lindsay Levine', email: 'linds@gmail.com', githubUsername: 'lindslev', rank: 1 },
  { name: 'Colin VanLang', email: 'col@hotmail.com', githubUsername: 'covlllp', rank: 2 },
  { name: 'Winnie Chen', email: 'winn@yahoo.com', githubUsername: 'win-chen', rank: 3 },
  { name: 'Emily Ho', email: 'emily@emily.codes', githubUsername: 'EmilyDev', rank: 4 }
];

db.sync({force : true})
  .then(() => {
    return Promise.map(someScholars, scholar => Scholar.create(scholar))
  })
  .then(() => {
    console.log(`'Twas a successful seeding, and all rejoiced.`);
    process.exit(0);
  })
  .catch(console.error);