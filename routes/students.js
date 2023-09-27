import express from 'express';

import { getStuds, createStud, getStud, deleteStud, updateStud } from '../controllers/students.js';

const router = express.Router();

router.get('/', getStuds);

router.post('/', createStud);

router.get('/:id', getStud);

router.delete('/:id', deleteStud);

router.patch('/:id', updateStud);

export default router;