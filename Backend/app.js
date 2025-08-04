const dotenv = require('dotenv');
dotenv.config();
// they are used to load environment variables from a .env file into process.env
const express = require('express');
const app = express();
const cors =require('cors');
const connectToDb = require('./db/db');

app.use(cors());
// this is for enabling CORS, which allows your server to accept requests from different origins











app.get('/',(req,res)=>{
    res.send('Hello World')
})

// this is for exporting the app instance 
module.exports=app;