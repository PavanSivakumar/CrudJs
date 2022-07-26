const express = require('express');
const app = express();

app.get('/',function(req,res){
    // console.log('hello world');
    res.send('hello world');
})

app.get('/hello/:id',function(req,res){
    id = req . params.id;
    if(id == 1)
    {
        res.send('Pavan kumar');
    }
    else if(id == 2)
    {
        res.send('nandy jackson');
    }
    else
    {
        res.send('mohan');
    }  
})

app.get('/hello',function(req,res){
    id = req.query.id;
    if(id == 1)
    {
        res.send('Pavan kumar');
    }
    else if(id == 2)
    {
        res.send('nandy jackson');
    }
    else
    {
        res.send('mohan');
    }  
})


app.listen(1004 , function(req ,res){
    console.log('Running');
});