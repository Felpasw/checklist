// imports
import express from 'express';
import cors from 'cors';
import {postChecklist,delChecklist,updateChecklist, getChecklist, getChecklists, postLogin, postSignup} from './RequestHandler'
// Config
const router = express.Router();


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
router.post('/Signup', postSignup);
router.post('/Login', postLogin)
export default router;
