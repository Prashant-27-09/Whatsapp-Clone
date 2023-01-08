import express from "express";
import Connection from "./database/db.js";
import bodyParser from "body-parser";
import route  from "./routes/route.js";
import cors from 'cors';


const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',route);

Connection();


const PORT=8000;

app.listen(PORT,()=> console.log(`Server is running successfully on Port ${PORT}`));