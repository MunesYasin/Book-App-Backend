'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const server = express();
server.use(cors());
mongoose.connect(`${process.env.MONGO_SERVER_LINK}/admin`);

server.use(express.json());

const dataBase = require('./modules/dataBase')




function addBookData (){

    const ulysses = new dataBase({
        title :'Ulysses',
        description :'Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer',
        status :'ok',
        email:'m2nesyasin@outlook.com',
        
    })
    
    
    const onQuixote = new dataBase({
        title :'Don Quixote',
        description :'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry, and believes th',
        status :'ok',
        email:'m2nesyasin@outlook.com',
        
    })
    
    const oneHundred  = new dataBase({
        title :' One Hundred Years of Solitude ',
        description :'One of the 20th centurys enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world, and the ultimate achievement in a Nobel Prize–winning car...',
        status :'ok',
        email:'m2nesyasin@outlook.com',
        
    })
    
    ulysses.save();
    onQuixote.save();
    oneHundred.save();
    }


//addBookData();


server.get('/', (req, res) => {
    res.send('home route')
})



server.get('/books',bookhundler) 
server.post('/addBook',addBook)
server.delete('/deleteBook',deleteBook)
server.put('/update',updateBook)






server.get('*',(req,res)=>{
    res.status(404).send('not found')
})

server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})




    
    
    function bookhundler(req,res){
    console.log('tttttttttttttt')
       let email1 = req.query.email
       dataBase.find({email:email1},function(error,data){
        if(error) {
            console.log('error in getting the data')
        } else {
            console.log(data);
            res.send(data)
        }})
    
    
    }
    
    
  async  function addBook(req,res){
        let {title,description,status,email} = req.body;
await dataBase.create({title,description,status,email})
dataBase.find({email}),function (error,data){



    if (err) {
        console.log('error in getting the data',error)
    } else {
        console.log(data);
        dataBase.find({email},function(error,data){
            if(error) {
                console.log('error in getting the data')
            } else {
                console.log(data);
                res.send(data)
            }})
    }
}
    }

    function deleteBook(req,res){
        let bookID= req.query.bookID
        let email = req.query.email
 dataBase.deleteOne({_id:bookID}).then(()=>{
    dataBase.find({email}),function (error,data){



        if (err) {
            console.log('error in getting the data',error)
        } else {
            console.log(data);
            dataBase.find({email},function(error,data){
                if(error) {
                    console.log('error in getting the data')
                } else {
                    console.log(data);
                    res.send(data)
                }})
        }
    }
 })
    }

    
    function updateBook (req,res){

       let {title,description,status,email,bookID} = req.body

        dataBase.findByIdAndUpdate(bookID,{title,description,status,email},(error,updatedData)=>{
            if(error){console.log(error)}
            else{
                dataBase.find({email},function(error,data){
                    if(error) {
                        console.log('error in getting the data')
                    } else {
                        console.log(data);
                        res.send(data)
                    }})
            }
        })
    }