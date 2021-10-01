const axios = require('axios'); 
const express = require('express');
const mongoose  = require('mongoose');
require('dotenv').config();
mongoose.connect(`${process.env.MONGO_SERVER_LINK}/admin`);