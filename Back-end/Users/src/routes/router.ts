// imports
import express from 'express';
import cors from 'cors';
import {postLogin,postSignup} from './RequestHandler'
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
router.post('/Signup', postSignup);
router.post('/Login', postLogin)

export default router;