'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const server = express();
server.use(cors());
mongoose.connect('mongodb://localhost:27017/admin');



const getData = require('./modules/dataBase')






server.get('/', (req, res) => {
    res.send('home route')
})



server.get('/books',getData) 







server.get('*',(req,res)=>{
    res.status(404).send('not found')
})

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})