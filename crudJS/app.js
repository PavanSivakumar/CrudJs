const mongoose = require('mongoose')
const express = require('express')
const url = 'mongodb://localhost/PavanDB'

const app = express(); //intialise express

mongoose.connect(url,{useNewUrlParser : true})
const con = mongoose.connection;//connection handler

con.on('open' , function(){
    console.log('connected');
})

app.listen(3003 , function(){
    console.log('server connected');
}); // server connected

app.use(express.json());// used to read the json object in router.js

const alienRouter = require('./routes/aliens')
app.use('/aliens' , alienRouter);




