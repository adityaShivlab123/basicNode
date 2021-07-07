import express from 'express';
import cors from 'cors';
import {router} from './src/routers/routes.js';
var bodyParser = require('body-parser');
const app = express();
const port = 4800;

app.use(cors())
app.use(bodyParser.json());

app.use('/new/task2',router)

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})

// +12028583568
// ACbdf326a643c2170235909332a59831a4
// a1c0d56ec4087af78f7b5b2b95a0a82c