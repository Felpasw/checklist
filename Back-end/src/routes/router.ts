// imports
import express from 'express';
import {postChecklist,delChecklist,updateChecklist, getChecklist, getChecklists} from './RequestHandler'
// Config
const router = express.Router();
//Sets
router.post('/signup', postChecklist);
router.put('/signup/:id', updateChecklist);
router.delete('/signup/:id', delChecklist);
router.get('/signup/:id', getChecklist);
router.get('/', getChecklists);
export default router;