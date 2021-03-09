const { json } = require("body-parser")
const {findStores, insertStore, updateStore, removeStore}=require("../models/storeModels")

const stores=async function(req,res){
    try{
        let result=await findStores()
        res.status(200).json(result)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server error"});
    }
}

const addStore=async function(req,res){
    try{
        let {nameValue,addressValue,phoneValue,ownerValue}=req.body
        if (!nameValue || !addressValue || !phoneValue || !ownerValue){
            res.status(400).json({message:"Please enter the correct content"})
            return
        }
        let storeInformation={店家名稱:nameValue,店家住址:addressValue,店家電話:phoneValue,店家負責人:ownerValue}
        await insertStore(storeInformation)
    
        res.status(200).json({message:"Success"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server error"});
    }

}


const patchStore=async function(req,res){
    try{
    let {dataOld,dataNew,selectOption}=req.body
    
    if (!dataOld || !dataNew || !selectOption){
        res.status(400).json({message:"Please enter the correct content"})
        return
    }

    let oldInformation
    let newInformation
    switch (selectOption) {
        case "店家名稱":
            oldInformation={"店家名稱":dataOld}
            newInformation={"店家名稱":dataNew}
            break;
        case "店家住址":
            oldInformation={"店家住址":dataOld}
            newInformation={"店家住址":dataNew}
            break;
        case "店家電話":
            oldInformation={"店家電話":dataOld}
            newInformation={"店家電話":dataNew}
            break;
        case "店家負責人":
            oldInformation={"店家負責人":dataOld}
            newInformation={"店家負責人":dataNew}
            break;
    }
    let update=await updateStore(oldInformation,newInformation)
    let updateTimes=update.result.nModified
    
    if (!updateTimes){
        res.status(400).json({message:"No corresponding resource update"})
        return
    }else{
        res.status(200).json({message:"Success"})
    }

    }
    catch(error){
        console.log(error)
        res.status(500,json({message:"Internal server error"}))
    }
}

const deleteStore=async function(req,res){
    try{
        let storeName=req.body.deleteStoreName
        let result=await removeStore(storeName)
        let deleteTimes=result.deletedCount

        if (!deleteTimes){
            res.status(400).json({message:"No corresponding resource delete"})
        }else{
            
            res.status(200).json({message:"Success"})
        }
    }
    catch(error){
        console.log(error)
        res.status(500,json({message:"Internal server error"}))
    }
}


module.exports={
    stores,
    addStore,
    patchStore,
    deleteStore
}