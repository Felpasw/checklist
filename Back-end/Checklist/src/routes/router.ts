// imports
import express from 'express';
import cors from 'cors';
import {postChecklist,delChecklist,updateChecklist, getChecklist, getChecklists} from './RequestHandler'
// Config
const router = express.Router();


// VAI TOMA NO SEU CU POLÍTICA CORS 
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});

//Sets 
router.post('/Checklist', postChecklist);
router.put('/Checklist/:id', updateChecklist);
router.delete('/Checklist/:id', delChecklist);
router.get('/Checklist/:id', getChecklist);
router.get('/:id', getChecklists);
export default router;