
const mongoose  = require('mongoose');


    
const book = new mongoose.Schema({

title :String,
description :String,
status :String,
email:String,

})

const books = mongoose.model('book',book)
module.exports = books


