import express from 'express';
let router = express.Router();

import { Scholars } from '../database/scholarsDbInterface';

router.get('/api/', Scholars.getAll);
router.get('/api/:id', Scholars.getOne);
router.post('/api/', Scholars.create);
router.put('/api/:id', Scholars.update);
router.delete('/api/:id', Scholars.remove);

export const scholars = router;
