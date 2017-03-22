import {emoji} from 'node-emoji'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  require('./build/apply-build-middleware').default(app);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.normalize(__dirname + '/dist')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, () => console.log(`${emoji.ear} listenin on ${port} ${emoji.ear}`));

import { addRoutes } from './api/endpoints';
addRoutes(app);

app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname });
});

