require("dotenv").config();
const {DB}=process.env
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = DB;



async function insertMany(collection,object){
    let connect=null
    try{
        connect=await MongoClient.connect(url,{useUnifiedTopology: true})
        let db=connect.db(dbName).collection(collection)
        let result=await db.insertMany([object])
        return result

    }
    catch(error){
        console.log(error)
        return error
    }
    finally{
        if (connect != null){
            connect.close()
        }
    }
}

async function findAll(collection){
    let connect=null
    try{
        connect=await MongoClient.connect(url,{useUnifiedTopology: true})
        let db=connect.db(dbName).collection(collection)
        let result=await db.find({}).toArray()
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
    finally{
        if (connect != null){
            connect.close()
        }
    }
}

async function findOne(collection,object){
    let connect=null
    try{
        connect=await MongoClient.connect(url,{useUnifiedTopology: true})
        let db=connect.db(dbName).collection(collection)
        let result=await db.find(object).toArray()
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
    finally{
        if (connect != null){
            connect.close()
        }
    }
}

async function updateOne(collection,object,object2){
    let connect=null
    try{
        connect=await MongoClient.connect(url,{useUnifiedTopology: true})
        let db=connect.db(dbName).collection(collection)
        let result=await db.updateOne(object,{$set:object2})
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
    finally{
        if (connect != null){
            connect.close()
        }
    }
}

async function deleteOne(collection,object){
    let connect=null
    try{
        connect=await MongoClient.connect(url,{useUnifiedTopology: true})
        let db=connect.db(dbName).collection(collection)
        let result=await db.deleteOne(object)
        return result
    }
    catch(error){
        console.log(error)
        return error
    }
    finally{
        if (connect != null){
            connect.close()
        }
    }
}

module.exports={
    insertMany,
    findAll,
    findOne,
    updateOne,
    deleteOne
}