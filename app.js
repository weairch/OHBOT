const express = require("express");
const app= express();
const bodyParser = require("body-parser");
require("dotenv").config();
const {PORT}=process.env;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("view"));


app.use("/api/1.0",
    [
        require("./server/routes/userRoute"),  
        require("./server/routes/storeRoute"),  
    ]
);


app.get("/",function(req,res){
    res.sendFile(__dirname+"/view/index.html");
});
app.get("/login",function(req,res){
    res.sendFile(__dirname+"/view/login.html");
});
app.get("/background",function(req,res){
    res.sendFile(__dirname+"/view/background.html");
});



app.listen(PORT,function(){
    console.log("server is start!");
});