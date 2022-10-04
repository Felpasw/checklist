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
router.post('/signup', postChecklist);
router.put('/signup/:id', updateChecklist);
router.delete('/signup/:id', delChecklist);
router.get('/signup/:id', getChecklist);
router.get('/', getChecklists);

export default router;