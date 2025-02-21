const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');  
const userRouter = require('./routes/user.route.js'); 
const cookieParser = require('cookie-parser');
dotenv.config();
const connectToDb = require('./db/db.js');
connectToDb();
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'https://solo-anime.vercel.app',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/users',userRouter)

module.exports = app;