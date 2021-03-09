const fetch=require("node-fetch");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const {CLIENT_SECRET, CLIENT_ID}=process.env;
const {findUser,insertUser}=require("../models/userModels");


const signIn=async function(req,res){
    try{

        //拿取資料
        let {code}=req.body;
        let formData=new URLSearchParams({
            "grant_type":"authorization_code",
            "code":code,
            "redirect_uri":"http://localhost:3000/login",
            "client_id":CLIENT_ID,
            "client_secret":CLIENT_SECRET,
        });
        let getAccessTokenConfig={
            method:"POST",
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:formData.toString()
        };
        let getAccessToken=await fetch("https://api.line.me/oauth2/v2.1/token",getAccessTokenConfig);
        let {id_token}=await getAccessToken.json();
        let profile=jwt.verify(id_token,CLIENT_SECRET);

        let {name,email}=profile;

        //確認是否資料庫有無使用者資料
        //沒有資料則新增
        let user=await findUser({email});
        if (user == ""){
            await insertUser({name,email});
        }
        
        res.json({message:"Success",name});
    
    }
    catch(error){
        console.log(error);
        res.json({message:"Fail"});
    }
};



module.exports={
    signIn,
};