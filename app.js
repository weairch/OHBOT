const express = require('express');
const app= express();

app.get('/',function(req,res){
    res.send()
})

app.listen('3000',function(){
    console.log('server is start!')
})