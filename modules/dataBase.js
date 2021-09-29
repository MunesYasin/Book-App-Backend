const axios = require('axios'); 
const express = require('express');
const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin');

function bookData (req,res){


    
const book = new mongoose.Schema({

title :String,
description :String,
statu :String,
email:String,

})

const books = mongoose.model('book',book)


function addBookData (){

const ulysses = new books({
    title :'Ulysses',
    description :'Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer',
    statu :'ok',
    email:'m2nesyasin@outlook.com',
    
})


const onQuixote = new books({
    title :'Don Quixote',
    description :'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry, and believes th',
    statu :'ok',
    email:'m2nesyasin@outlook.com',
    
})

const oneHundred  = new books({
    title :' One Hundred Years of Solitude ',
    description :'One of the 20th centurys enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world, and the ultimate achievement in a Nobel Prize–winning car...',
    statu :'ok',
    email:'m2nesyasin@outlook.com',
    
})

ulysses.save();
onQuixote.save();
oneHundred.save();


}
//addBookData();

   let email1 = req.query.email
    books.find({email:email1},function(error,data){
    if(error) {
        console.log('error in getting the data')
    } else {
        console.log(data);
        res.send(data)
    }})




}

module.exports = bookData; 