const express = require('express');
const app= express();
const bodyParser = require('body-parser');
require("dotenv").config();
const {PORT}=process.env



let {insertMany,findAll,updateOne,deleteOne}=require("./server/models/mongodbConnect")
// insertMany("store",[{店家名稱:"好好吃火鍋店",店家住址:"台北市好好吃路三段三號",店家電話:"02-12345678",店家負責人:"好吃仔一號店"}])
// insertMany("store",[{店家名稱:"好好吃燒肉店",店家住址:"台北市好好吃路四段四號",店家電話:"02-12345678",店家負責人:"好吃仔二號店"}])
// insertMany("store",[{店家名稱:"好好吃牛排店",店家住址:"台北市好好吃路五段五號",店家電話:"02-12345678",店家負責人:"好吃仔三號店"}])



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/1.0",
    [
        require("./server/routes/userRoute"),  
        require("./server/routes/storeRoute"),  
    ]
);


app.get("/",function(req,res){
    res.sendFile(__dirname+'/view/index.html')
})
app.get("/login",function(req,res){
    res.sendFile(__dirname+'/view/login.html')
})
app.get("/background",function(req,res){
    res.sendFile(__dirname+"/view/background.html")
})



app.listen(PORT || "3000",function(){
    console.log('server is start!')
})