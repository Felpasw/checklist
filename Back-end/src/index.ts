
require("./database/models/checklist")
import express from 'express';
import router from './routes/router';
import cors from 'cors';



const app = express();
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(morgan('dev'));
app.use(router);


app.listen(4000, ()=> console.log("Sever is running on port 4000!"));
module.exports = app;
