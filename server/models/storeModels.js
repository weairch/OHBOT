const {findAll}=require("./mongodbConnect")

const findStores=async function(){
    let result=await findAll("store")
    return result
}

module.exports={
    findStores
}