const {findAll, insertMany, updateOne, deleteOne}=require("./mongodbConnect");

const findStores=async function(){
    try{
        let result=await findAll("store");
        return result;
    }
    catch(error){
        console.log(error);
    }
};

const insertStore=async function(object){
    try{
        let result=await insertMany("store",object);
        return result;
    }
    catch(error){
        console.log(error);
    }

};

const updateStore=async function(oldData,newData){
    try{
        let result=await updateOne("store",oldData,newData);
        return result;
    }
    catch(error){
        console.log(error);
    }
};

const removeStore=async function(storeName){
    try{
        let result=await deleteOne("store",{"店家名稱":storeName});
        return result;
    }
    catch(error){
        console.log(error);
    }
};

module.exports={
    findStores,
    insertStore,
    updateStore,
    removeStore
};