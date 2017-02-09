import { emoji } from 'node-emoji'
import express from 'express';
import bodyParser from 'body-parser';

import { scholars } from './routes/scholars';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send('hello scholarship'));

app.use('/scholars', scholars);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, () => console.log(`${emoji.ear} listenin on ${port} ${emoji.ear}`));
