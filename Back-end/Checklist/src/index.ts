require("./database/models/user")
require("./database/models/checklist")
import express from 'express';
import router from './routes/router';



const app = express();

app.use(express.json());
app.use(router);



app.use(express.urlencoded({extended: true}));
//app.use(morgan('dev'));



app.listen(4000, () => console.log("Sever is running on port 4000!"));
module.exports = app;
