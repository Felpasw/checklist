
require("./database/models/user")
import express from 'express';
import router from './routes/router';



const app = express();

app.use(express.json());
app.use(router);



app.use(express.urlencoded({extended: true}));
//app.use(morgan('dev'));



app.listen(5000, () => console.log("Sever is running on port 5000!"));
module.exports = app;
