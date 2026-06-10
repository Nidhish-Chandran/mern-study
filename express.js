

const express = require('express');

const path = require('path')

const app = express();


app.use(function(req,res,next){
    console.log("hello")
    // res.send("hi nidhish")
    next()
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'sample.html'))
})

app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname,'login.html'))
})

app.get('/hello',function(req,res){
    res.send('new hello')
})

app.post('/login',function(req,res,next){
    res.send('Login succesfully')
    next()
})

app.use(function(req,res){
    console.log("End")
})

app.listen(3000,function(){
    console.log('Server started')
})


