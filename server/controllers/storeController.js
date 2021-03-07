const {findStores}=require("../models/storeModels")

const stores=async function(req,res){
    let result=await findStores()
    res.json(result)
}



module.exports={
    stores
}