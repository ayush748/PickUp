const dotenv = require('dotenv');
dotenv.config();
// they are used to load environment variables from a .env file into process.env
const express = require('express');
const app = express();
const cors =require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

app.use(cors());
// this is for enabling CORS, which allows your server to accept requests from different origins
app.use(express.json());
// this is for parsing incoming JSON requests and putting the parsed data in req.body
app.use(express.urlencoded({ extended: true }));





app.get('/',(req,res)=>{
    res.send('Hello World')
})



app.use('/users', userRoutes);

// this is for exporting the app instance
module.exports = app;